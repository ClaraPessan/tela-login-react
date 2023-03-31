import styles from './Label.module.scss'

export default function Label(props) {
    return <label className={styles.label}>{props.label}</label>
}