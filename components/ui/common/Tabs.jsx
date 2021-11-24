import React from 'react'
import { Tab } from 'semantic-ui-react'

export default function Tabs({ menu, panes }) {
	return <Tab menu={menu} panes={panes} renderActiveOnly={false} />
}
