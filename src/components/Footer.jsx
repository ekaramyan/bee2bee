import { useMediaQuery, LinearProgress } from '@mui/material'

import { useState, useEffect, useMemo } from 'react'
import Socials from './UI/Socials'
import StatsBar from './UI/StatsBar'
import useGetStats from '@/hooks/useGetStats'

export default function Footer() {
	const [stats, setStats] = useState({})

	const { getStats, data, loading, error, success } = useGetStats()

	useEffect(() => {
		const fetchData = async () => {
			try {
				await getStats()
			} catch (err) {
				console.error('Error fetching stats:', err)
			}
		}
		fetchData()
	}, [])

	useEffect(() => {
		if (data !== null && error === null) {
			setStats(data)
		}
	}, [data])

	const isMobile = useMediaQuery('@media(max-width:1300px)')
	const statsBar = useMemo(() => <StatsBar stats={stats} />, [stats])

	return (
		<footer
			style={{
				width: '100%',
				background: '#EAEEE8',
				display: 'flex',
				alignItems: 'center',
				justifyContent: isMobile ? 'center' : 'space-between',
				alignSelf: 'end',
				minHeight: 80,
				borderRadius: '20px 20px 0px 0px',
				padding: '0 20px',
				justifySelf: 'end',
				userSelect: 'none',
			}}
		>
			{isMobile ? <div /> : loading ? <LinearProgress /> : statsBar}
			<div>
				<Socials width={isMobile ? 30 : 40} height={isMobile ? 30 : 40} />
			</div>
		</footer>
	)
}
