import classNames from 'classnames/bind'
import styles from './Video.module.scss'
import Section from '@shared/Section'

const cx = classNames.bind(styles)

function Video() {
  return (
    <Section className={cx('container')}>
      <video autoPlay={true} muted={true} loop poster="/assets/poster.png">
        <source src="/assets/main.mp4" type="video/mp4"></source>
      </video>
    </Section>
  )
}

export default Video
