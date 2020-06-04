import React from 'react'
import { ContainerHeader }from './styles';

function Header(props) {
	return (
		<ContainerHeader>
			<HeaderLogo>
			</HeaderLogo>
			<HeaderLogo>
				{props.children}
			</HeaderLogo>
		</ContainerHeader>
	);
}

export default Header;
