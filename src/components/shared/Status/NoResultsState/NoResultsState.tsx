import useTranslation from 'next-translate/useTranslation'

type Props = {}

function NoResultsState({}: Props) {
  const { t } = useTranslation('common')

  return <div>{t('noResults')}</div>
}
export default NoResultsState
