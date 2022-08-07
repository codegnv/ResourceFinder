import useTranslation from 'next-translate/useTranslation'

type Props = {}

function ErrorState({}: Props) {
  const { t } = useTranslation('common')

  return <div>{t('error')}</div>
}
export default ErrorState
