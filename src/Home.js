import './style.css'
import React from 'react'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

import {
  Typography,
  Grid,
  Box,
  Paper,
  MenuList,
  MenuItem,
  Link
} from '@material-ui/core'

export default function Home() {
  return (
    <Typography component="div" variant="root">
      <Typography component="main" variant="root" gutterBottom>
        <Header title="Welcome to my app!" />
        <Typography component="p" variant="inherit" className="description">
          Get started by editing <code>pages/index.js</code>
        </Typography>
        <Paper>
          <MenuList class="menulist">
            <MenuItem>
              <Link
                color="primary"
                href="https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN"
              >
                <i className="material-icons left">g_translate</i>Google翻譯
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                color="primary"
                href="https://docs.google.com/spreadsheets/d/1gzDP5JSYbjPs3ypXvHgZXDp7hbczR5l0OxVDBulMjG0"
              >
                <i className="material-icons left">today</i>日報
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                color="primary"
                href="https://docs.google.com/document/d/1rxUeCFo3CkjF4Vj-GWdrom10mPnWe6_bKdR6CT_GjV8"
              >
                <i className="material-icons left">history_edu</i>批注詞
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                color="primary"
                href="https://docs.google.com/spreadsheets/d/1mtz6488MHF6LxGPVro5X5qneZJt2Hv3SqLekWwwk0zw"
              >
                <i className="material-icons left">calculate</i>數據計算
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                color="primary"
                href="https://docs.google.com/spreadsheets/d/18SWgCzsUB4rHSNl_qEe8OrlbmwGvqnZkv3wuKQznshY"
              >
                <i className="material-icons left">filter_alt</i>篩選總表
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                color="primary"
                href="https://docs.google.com/spreadsheets/d/1BEgZRROTF-8GyU7KFfG0BT-Gkh1o9qJlzNECzQh14jI"
              >
                <i className="material-icons left">source</i>匯入處理
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                color="primary"
                href="https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws"
              >
                <i className="material-icons left">folder_shared</i>採購部共用
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                color="primary"
                href="https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA"
              >
                <i className="material-icons left">folder_shared </i>Jayden共用
              </Link>
            </MenuItem>
          </MenuList>
        </Paper>
      </Typography>

      <Box mb={2}>
        <Copyright />
      </Box>
      <Footer />
    </Typography>
  )
}
