import React from 'react'
import PropTypes from 'prop-types'

import ToolBadge from './ToolBadge'

const ToolBadgesWithText: React.FC<{languagesAndFrameworks: string[]}> = ({languagesAndFrameworks}) => {
  return (
    <ul className="tools-badge-area-with-text">
        {languagesAndFrameworks.map((tool) => (
          <li>
            <ToolBadge tool={tool} />
          </li>
        ))}
      </ul>
  )
}

export default ToolBadgesWithText