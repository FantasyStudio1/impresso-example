import { Container } from '@/components/common'

import s from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div>All Rights Reserved, 2024</div>
        <div>Fantasy</div>
      </Container>
    </footer>
  )
}
