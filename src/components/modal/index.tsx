import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Modal as ReactNativeModal } from 'react-native'

import * as S from './styles'

type ModalProps = {
  height?: string
  children: React.ReactNode
}

export type ModalRef = {
  toggle: () => void
}

export const Modal = forwardRef<ModalRef, ModalProps>(
  ({ height = '50%', children }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    useImperativeHandle(ref, () => ({
      toggle: () => setIsModalOpen((value) => !value),
    }))

    return (
      <ReactNativeModal
        transparent
        animationType="slide"
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onDismiss={() => setIsModalOpen(false)}
      >
        <S.Overlay activeOpacity={0.2} onPress={() => setIsModalOpen(false)}>
          <S.Content height={height} activeOpacity={1}>
            <S.ActionIcon />

            {children}
          </S.Content>
        </S.Overlay>
      </ReactNativeModal>
    )
  },
)

Modal.displayName = 'Modal'
