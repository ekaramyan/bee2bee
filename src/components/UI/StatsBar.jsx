import React, { useMemo } from 'react'
import DropdownMenu from './DropdownMenu'
import DropdownLabel from './DropdownLabel'

export default function StatsBar({ stats }) {
	const dropdownMenus = useMemo(
		() => (
			<>
				<DropdownMenu
					buttonLabel={
						<DropdownLabel name='ACTIVE USERS' title={stats.active_users} />
					}
				/>
				<DropdownMenu
					buttonLabel={
						<DropdownLabel
							name='CELLS'
							title={stats.active_cells + stats.closed_cells}
						/>
					}
					options={[
						{ name: 'ACTIVE ', count: stats.active_cells },
						{ name: 'CLOSED ', count: stats.closed_cells },
					]}
				/>
				<DropdownMenu
					buttonLabel={
						<DropdownLabel name='Countries' title={stats?.countries?.length} />
					}
					options={stats.countries}
				/>
			</>
		),
		[stats]
	)

	return dropdownMenus
}
