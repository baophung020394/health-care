import React, { useState } from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import withLayout from '@pages/Layouts/withLayout'

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('user')
  const [password, setPassword] = useState('password')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    // Giả lập đăng nhập thành công
    // Trong thực tế, bạn sẽ gửi yêu cầu đăng nhập đến server và xử lý response
    if (username === 'user' && password === 'password') {
      const token = 'your_fake_token' // Giả lập token
      localStorage.setItem('token', token)
      setIsLoggedIn(true)
      navigate('/tops')
    }
  }

  return (
    <Container maxWidth='sm' style={{ margin: '60px auto' }}>
      <Typography variant='h4' align='center' gutterBottom>
        Login
      </Typography>
      <TextField
        label='Username'
        fullWidth
        variant='outlined'
        margin='normal'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label='Password'
        type='password'
        fullWidth
        variant='outlined'
        margin='normal'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant='contained'
        color='primary'
        fullWidth
        onClick={handleLogin}
        disabled={isLoggedIn}
        style={{
          background: 'linear-gradient(33deg, #ffcc21 0%, #ff963c 100%)',
          fontSize: 18,
          fontWeight: 300,
          fontFamily: "'Hiragino Kaku Gothic Pro' !important",
          color: '#ffffff',
          minWidth: 296,
          minHeight: 56,
          maxHeight: 56,
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          textTransform: 'capitalize'
        }}
      >
        Login
      </Button>
      {isLoggedIn && (
        <Typography variant='body1' align='center' style={{ marginTop: '16px' }}>
          Login Success!
        </Typography>
      )}
    </Container>
  )
}

export default withLayout(LoginForm)
