import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';
import axios from 'axios';



export default class portfolioDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            PortfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        axios.get(`https://luiscintron.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true }).then(response => {
            this.setState({
                PortfolioItem: response.data.portfolio_item
            })
        }).catch(error => {
            console.log('getportfolioitem error', error);
        })
    }
    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url,
        } = this.state.PortfolioItem;

        const bannerStyles = {
            backgroundImage: 'url(' + banner_image_url + ')',
            backgroundSize: 'cover',
            BackgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        };

        const logoStyles = {
            width: '200px'
        }



        {
            return (
                <div className='portfolio-detail-wrapper'>
                    <div className='banner' style={bannerStyles}>
                        <img src={logo_url} style={logoStyles} />
                    </div>

                    <div className='portfolio-detail-description-wrapper'>
                        <div className='description'>description</div>
                    </div>

                    <div className='bottom-content-wrapper'>
                        <a href={url} className='site-link' target='_blank'> Visit {name} </a>
                    </div>
                </div>
            )
        }
    }
}
