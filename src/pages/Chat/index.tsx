import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Button, Section } from '../../components'
import { sendMessage } from '../../api'
import Markdown from 'react-markdown'

export const Chat = () => {
  const [loading, setLoading] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<
    {
      author: string
      message: string
    }[]
  >([])

  const [myMessage, setMessage] = useState<string>('')

  const onMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight)
  }, [messages])

  const onSend = async () => {
    setLoading(true)
    setMessages([
      ...messages,
      {
        author: 'me',
        message: myMessage,
      },
    ])
    const { response } = await sendMessage({
      prompt: myMessage,
    })
    setMessage('')
    setLoading(false)
    setMessages((prev) => [
      ...prev,
      {
        author: 'chat',
        message: response,
      },
    ])
  }

  return (
    <>
      <Section className="flex flex-col place-items-center mb-5">
        <h1 className="text-center text-3xl  mb-8">
          Аналарға арналған Жасанды Интеллектті Ассистент
        </h1>
        <div className="flex flex-col p-5 justify-between bg-primary rounded-xl w-full h-[450px]">
          {messages.length > 0 ? (
            <div
              ref={chatRef}
              className="overflow-y-scroll rounded-xl flex flex-col flex-1 gap-5 px-5"
            >
              {messages.map(({ author, message }) => (
                <p
                  className={`bg-white rounded-md w-fit p-2 ${
                    author === 'me' ? 'self-end bg-bg' : 'self-start'
                  }`}
                >
                  <Markdown>{message}</Markdown>
                </p>
              ))}
              {loading && (
                <img height={40} width={60} src="/assets/loader.gif" />
              )}
            </div>
          ) : (
            <div className="h-full text-gray-500 flex flex-col justify-center items-center">
              <img width={200} src="assets/bot.png" />
              <p className="max-w-[500px] text-center">
                Өзіңіздің қалаған сұрағыңызды қойып, Жасанды Интеллекттің
                көмегімен сауалдарыңызға актуалды жауап табыңыз!
              </p>
              <p>
                Сервистің қосылуына орай, бірінші жауап{' '}
                <b>әдеттегіден ұзақрақ</b> келуі мүмкін.
              </p>
              <p>Күткеніңізге рақмет!</p>
            </div>
          )}
          <div className="flex pt-5 w-full">
            <form
              className="w-full flex"
              onSubmit={(event) => {
                event.preventDefault()
                onSend()
              }}
            >
              <input
                disabled={loading}
                onChange={onMessageChange}
                type="text"
                value={myMessage}
                className="w-full p-2 bg-white rounded-xl border-none outline-none"
              />
              <Button className="ml-2" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Chat
