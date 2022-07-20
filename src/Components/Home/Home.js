import React from 'react';
import './Home.scss';
import Product from './Product/Product';

const Home = () => {
    return (
        <main>
            <header className='home-header'>
                <h1 className="home-h1">What's so cool about Grimoire?</h1>
                <p className='home-p'>At Grimoire you can buy any genre and receive both a physical and virtual copy</p>
                <p className='home-p'>There's a community marketplace with rewards for participating</p>
                <p className='home-p'>You can read your virtual copies on the go with our reader</p>
                <p className='home-p'>Convenient, isn't it?</p>
            </header>
            <section className="collections">
                <h2 className='section-h2'>Our Most Popular Collections</h2>
                <Product props={{
                    className: 'first-collection'
                }} />
                <article className="secondary">
                    <Product props={{
                        className: 'collection'
                    }} />
                    <Product props={{
                        className: 'collection'
                    }} />
                    <Product props={{
                        className: 'collection'
                    }} />
                </article>
            </section>
            <section className='marketplace'>
                <h2 className='section-h2'>Marketplace Benefits</h2>
                <article className='discount'>
                    <img src="./icons/discount.png" alt="" />
                    <h1>Get Discounts on Your Purchases</h1>
                </article>
                <article className='engage'>
                    <img src="./icons/engage.png" alt="" />
                    <h1>Don't let good books gather dust</h1>
                </article>
            </section>
            <section className="reader">

            </section>
            <footer>

            </footer>
        </main>
    );
}

export default Home;