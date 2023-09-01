import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Modal, ModalProps } from 'react-native'

import * as S from './styles'

type ModalHalfScreenProps = {
  height?: string
  children: React.ReactNode
} & ModalProps

export type ModalRefProps = {
  toggle: () => void
}

export const ModalHalfScreen = forwardRef<ModalRefProps, ModalHalfScreenProps>(
  ({ height = '50%', children }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    useImperativeHandle(ref, () => ({
      toggle: () => setIsModalOpen((value) => !value),
    }))

    return (
      <Modal
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
      </Modal>
    )
  },
)

ModalHalfScreen.displayName = 'ModalHalfScreen'
