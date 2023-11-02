import TextBlock from '@/containers/TextBlock'
import helpText from '@/texts/help.json'
import useAuthentication from '@/hooks/useAuthentication'

export default function AboutPage() {
	return <TextBlock header={'Help'} text={helpText.text} />
}
