import React, { Component } from 'react'
import './header.scss'
export default class Header extends Component {
    render() {
        return (
            <div id="home-header">
                <header>
                    <figure className="logo"></figure>
                </header>
                <section className="search-bar-wrap">
                    <section className="search-bar">
                        <aside className="search-icon">

                        </aside>
                        <aside className="search-value">
                            T恤
                        </aside>
                    </section>
                </section>
            </div>
            
        )
    }
}
