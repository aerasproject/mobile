import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Modal from 'react-native-modal'

import { Button } from '@/components/button'

import * as S from './styles'

type AlertModalProps = {
  onConfirm: () => void
  description: string
  isModalVisible: boolean
  setModalVisible: (value: boolean) => void
  isLoading: boolean
}

export function AlertModal({
  onConfirm,
  isModalVisible,
  setModalVisible,
  description,
  isLoading,
}: AlertModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      backdropColor="black"
      backdropOpacity={0.9}
      animationIn="fadeIn"
      isVisible={isModalVisible}
    >
      <S.Content>
        <S.Header>
          <Ionicons name="warning" size={32} color="#FFB84E" />
          <S.HeaderTitle>ATENÇÃO</S.HeaderTitle>
        </S.Header>

        <S.Description>{description}</S.Description>

        <S.ButtonsWrapper>
          <Button
            title="Cancel"
            variants="danger-outline"
            isLoading={isLoading}
            onPress={() => setModalVisible(false)}
          />
          <Button title="Excluir" onPress={onConfirm} isLoading={isLoading} />
        </S.ButtonsWrapper>
      </S.Content>
    </Modal>
  )
}
