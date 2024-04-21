import classNames from 'classnames/bind'
import Section from '../shared/Section'
import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  return (
    <Section title="사집첩">
      <ul className={cx('wrap-images')}>
        {images.map((src, idx) => (
          <li key={idx} className={cx('wrap-image')}>
            <img src={src} alt="사집첩 이미지" />
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default ImageGallery
