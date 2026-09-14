import { useEffect, useRef } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate } from 'react-router'
import { useExplorerStore } from '../../store/useExplorerStore'
import './Welcome.css'

export default function Welcome() {
  const navigate = useNavigate()
  const explorerName = useExplorerStore((state) => state.explorerName)

  useEffect(() => {
    if (explorerName) {
      navigate('/app', { replace: true })
    }
  }, [explorerName, navigate])

  return (
    <div className='page-center'>
      <LogInBox />
    </div>
  )
}
function LogInBox() {
  const inputVal = useRef('')
  const navigate = useNavigate()
  const login = useExplorerStore((state) => state.login)
  function onChangeHendler(e: ChangeEvent<HTMLInputElement>) {
    inputVal.current = e.target.value
  }

  function onClickHendler() {
    login(inputVal.current)
    navigate('/app', { replace: true })
  }
  return (
    <div className='card login-card'>
      <h1>אתר מזג אויר</h1>
      <input className='input' onChange={onChangeHendler} type='text' placeholder='הקלד שם' required />
      <button className='btn' onClick={onClickHendler}>
        להתחיל
      </button>
    </div>
  )
}
