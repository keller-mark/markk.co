import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import {
    Header, HeaderName, HeaderGlobalBar,
    HeaderGlobalAction, HeaderNavigation, HeaderMenu,
    HeaderMenuItem, SideNav, SideNavItems,
    HeaderSideNavItems, SkipToContent, HeaderMenuButton,
} from 'carbon-components-react/es/components/UIShell';
import TooltipIcon from 'carbon-components-react/es/components/TooltipIcon';
import { Email20 } from '@carbon/icons-react';

export default function MyHeader() {
    const [isSideNavExpanded, toggleIsSideNavExpanded] = useReducer(v => !v, false);

    const nav = (
        <>
            <HeaderMenu aria-label="Elsewhere" menuLinkName="Elsewhere">
                <HeaderMenuItem href="https://www.linkedin.com/in/keller-mark/">LinkedIn</HeaderMenuItem>
                <HeaderMenuItem href="https://scholar.google.com/citations?user=hnKZ5mwAAAAJ">Google Scholar</HeaderMenuItem>
                <HeaderMenuItem href="https://github.com/keller-mark">GitHub</HeaderMenuItem>
                <HeaderMenuItem href="https://beta.observablehq.com/@keller-mark">Observable</HeaderMenuItem>
                <HeaderMenuItem href="https://soundcloud.com/keller-mark-7">SoundCloud</HeaderMenuItem>
            </HeaderMenu>
        </>
    );

    return (
        <Header>
            <SkipToContent />
            <HeaderMenuButton
                aria-label="Open menu"
                onClick={() => toggleIsSideNavExpanded()}
                isActive={isSideNavExpanded}
            />
            <HeaderName href="#/" prefix="">
            Mark Keller
            </HeaderName>
            <HeaderNavigation className="mk--lg-header-nav">
                {nav}
            </HeaderNavigation>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="mark_keller[at]hms.harvard.edu" data-email="true" onClick={() => {
                    const el = document.querySelector('.bx--header__action[data-email="true"]').focus();
                }} tooltipAlignment="end">
                    <Email20 />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
                <SideNavItems>
                    <HeaderSideNavItems>
                        {nav}
                    </HeaderSideNavItems>
                </SideNavItems>
            </SideNav>
        </Header>
    );
}