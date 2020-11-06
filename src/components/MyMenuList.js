import React from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'

export default function MyMenuList() {
  return (
    <MenuList class="menulist">
      <MenuItem>
        <Link
          color="textPrimary"
          href="https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN"
        >
          <i className="material-icons left">g_translate</i>Google翻譯
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          color="textPrimary"
          href="https://docs.google.com/spreadsheets/d/1gzDP5JSYbjPs3ypXvHgZXDp7hbczR5l0OxVDBulMjG0"
        >
          <i className="material-icons left">today</i>日報
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          color="textPrimary"
          href="https://docs.google.com/document/d/1rxUeCFo3CkjF4Vj-GWdrom10mPnWe6_bKdR6CT_GjV8"
        >
          <i className="material-icons left">history_edu</i>批注詞
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          color="textPrimary"
          href="https://docs.google.com/spreadsheets/d/1mtz6488MHF6LxGPVro5X5qneZJt2Hv3SqLekWwwk0zw"
        >
          <i className="material-icons left">calculate</i>數據計算
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          color="textPrimary"
          href="https://docs.google.com/spreadsheets/d/18SWgCzsUB4rHSNl_qEe8OrlbmwGvqnZkv3wuKQznshY"
        >
          <i className="material-icons left">filter_alt</i>篩選總表
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          color="textPrimary"
          href="https://docs.google.com/spreadsheets/d/1BEgZRROTF-8GyU7KFfG0BT-Gkh1o9qJlzNECzQh14jI"
        >
          <i className="material-icons left">source</i>匯入處理
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          color="textPrimary"
          href="https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws"
        >
          <i className="material-icons left">folder_shared</i>
          採購部共用
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          color="textPrimary"
          href="https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA"
        >
          <i className="material-icons left">folder_shared </i>
          Jayden共用
        </Link>
      </MenuItem>
    </MenuList>
  )
}
