import React from 'react'
import { css } from '@emotion/react'
import FootBar from '../../components/FootBar/FootBar'
import { ReactComponent as AiChatBot } from '../../assets/image/aiChatBot.svg'
import Button from '../../components/Button/Button'
import theme from '../../styles/theme'
import { useNavigate } from 'react-router-dom'

export default function Chatbot() {
  const navigate = useNavigate()
  return (
    <div css={chatbotWrapper}>
      <section css={cbSection}>
        <header css={chatbotHeader}>
          날씨 챗봇 AI에 오신 것을 환영합니다!
        </header>
        <section css={chatbotSection}>
          <AiChatBot />
          <p>Chatbot AI</p>
        </section>
        <div css={buttonContainer}>
          <Button
            backgroundColor="primary"
            color="white"
            size="large"
            onClick={() => {
              navigate('/chatbotmessage')
            }}
          >
            시작하기
          </Button>
          <Button
            backgroundColor="primary_subtle"
            color="primary"
            size="small"
            onClick={() => {
              navigate('/chatbotsavedchat')
            }}
          >
            이전 기록 보기
          </Button>
        </div>
      </section>
      <FootBar />
    </div>
  )
}
const buttonContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const chatbotSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  p {
    font-size: ${theme.textStyle.title_large.font_size};
    line-height: ${theme.textStyle.title_large.line_height};
    color: ${theme.color.subtle_dark};
  }
`

const chatbotHeader = css`
  font-size: ${theme.textStyle.title_large.font_size};
  line-height: ${theme.textStyle.title_large.line_height};
`

const chatbotWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const cbSection = css`
  gap: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`