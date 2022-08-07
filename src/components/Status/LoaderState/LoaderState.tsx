import useTranslation from 'next-translate/useTranslation'
type Props = {}

function LoaderState({}: Props) {
  const { t } = useTranslation('common')

  return <div>{t('loading')}</div>
}
export default LoaderState
