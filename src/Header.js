import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import {
    Header, HeaderName, HeaderGlobalBar,
    HeaderGlobalAction, HeaderNavigation, HeaderMenu,
    HeaderMenuItem, SideNav, SideNavItems,
    HeaderSideNavItems, SkipToContent, HeaderMenuButton
} from 'carbon-components-react/es/components/UIShell';
import { Search20 } from '@carbon/icons-react';

export default function MyHeader() {
    const [isSideNavExpanded, toggleIsSideNavExpanded] = useReducer(v => !v, false);

    const nav = (
        <>
            <HeaderMenuItem href="#/blog">Blog</HeaderMenuItem>
            <HeaderMenuItem href="#/photos">Photos</HeaderMenuItem>
            <HeaderMenu aria-label="Elsewhere" menuLinkName="Elsewhere">
                <HeaderMenuItem href="https://github.com/keller-mark">GitHub</HeaderMenuItem>
                <HeaderMenuItem href="https://beta.observablehq.com/@keller-mark">Observable</HeaderMenuItem>
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
                {/*
                <HeaderGlobalAction aria-label="Search" onClick={console.log('search click')}>
                    <Search20 />
                </HeaderGlobalAction>
                */}
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