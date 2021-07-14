import React from 'react'
import { FaBeer } from "react-icons/fa"
import { FaMap } from "react-icons/fa"
import { useState } from 'react'

const BreweryCard = ({ id, name, city, state, website_url, brewery_type, handleFavorites, handleVisited, street, favorites, visitedBreweries, phoneNumber }) => {

    const [isFavorited, setIsFavorited] = useState(false)
    const [isVisited, setIsVisited] = useState(false)

    function handleClick(e){
        handleFavorites(id)
        if(isFavorited === false)
        setIsFavorited(!isFavorited)
    }

    function compareArrayWithBrewery(array){
        for (const item of array) {
            if (item.name === name) {
                return true
            } 
        }
    }

    function handleVisit(e){
        handleVisited(id)
        if(isVisited === false)
        setIsVisited(!isVisited)
    }

    function renderImage(type) {
        switch(type) {
            case 'large':
                return 'https://lh3.googleusercontent.com/gHJHNGVKlfqc-Ykqk5EB9kg1LBu_j9T7Nt2aLDiCzK27ixH5u6L-z6ZZIssK0cUssp3Phtr-hUBqEF8j3QPkxVT6FQiR2b-qt4BAWUq_FzfQEg9xOzPFPkXyW57triHo-yvOmUyfmaNW6CplrXTCGo8HS6tfWGLWmACio0SG8eo3v6inq3CyfLL7rcD6tsEGNXkNN55nSmD-vrJOgdC892_wwh8oDp7-26tAIrg_8YUEAQaEh4UH3f4YMQ-UqA17vkKrYdIb4jcd2ppe_njcYgDjzTidjs8lUgbxBp3Af6_RNCAXKe6UtPx1897GuaXtMn6DFf-OgeUyGEExxYlaHajeNZUCqVGwgF1oZgQ3-jw5g6tPwm-rK-RVwg0BLXp7SwbZJM3ff2H2VhkZfvegBfMFC4Rv7vwHw0BbMqg3FQ_wdL-J3w1Ih93PZfIhRRlktS04AIXbWn7vbfOIjYNAj82_dmDQTs5d9wGeJzMf-_erLTcdxoX2Ic-Xj15ESPzy2rteTQtJqzOwkfGpRzBPPIlOaZX-97VHx_WxDvBfGluOoPTwUbVI0uLYmmbMgbWmmUWxJBqyrE485dDLE2CO3pEWIOfycyAY-0r-q1cngDepN6ITRKwcRXuQuKRH4LCWw14aV2k4S1fk564yW8d4ncd8_irR59qQVAHTnlZ5bWN_ruPFR4h-IDY4VgH5SR5AAimmwh4qXttMV_sGYQgNHQ=s858-no?authuser=0'
                break;
            case 'micro':
                return 'https://lh3.googleusercontent.com/tN60lYmAA2Y18eRvEhsJwig4KJS26n7Y6lScm79CaRiTNoaMNHEekABHapDq-NvdsItoPD87jf5_05yFRNeSfEegVpZ66FDC1iBUEmXzxHu5HXMOYMG8XsB1dOdEJpV_RjikUVKs0OQSN23JhTTclLEPlOSFqT1yKcEySMSmYPajURvpJBcv6wGju6PXW6YswtqCei2BSVemzLzzbli6EeRXmRXZLkexSTOEj7YUrXWtisucuvKiegxp8fdZ8Mz9yIbDSUAmjngG9ir0AqcEfU2byalbawoWKYWsVe6xEJ50raVin9okgQWQf2SpfIxSf6ewskCbViyO_EVj1YmuVz2W5LhSl2HlARyxqeWYQQwqqG2anI8jooguKTe_JUthnFm8IEetpd13rhYXJv3DESDTDd0ozvoXyWLwkPZd-cQSG2khPV7yalx0itl0-4hfCeNS-6BKYInnuJEQwN83fE01xouAO2cEnmJYGbdVWOpHLME-drGLLcDh4ykNHwTr976HKpD5rqzsFp9dsxOrknK_BAdADuVBwsRxKKpSaQoloY0KpXNtMXJlileTHAdXwxLaKyrXYehe8txvjKc2Ij0Km9UWvaG5m_uzXPsWrzAkCgU56VUn3oEgbDVAZbuWIWOo8qaD0xihqBF49Ahgy2fz3VINI6RLf9j-eONNHVj4gXj4mQJeSY3lgIWzBV_iDJAAib-MpnKor3LFAvlkTA=s858-no?authuser=0'
                break;
            case 'planning':
                return 'https://lh3.googleusercontent.com/fKItq0qSKzq9yTBKP6QJhLB4aI4bFsuaO0YlQsDQ1bgaR9X50KHxZandhN1jvkKr8LrkryBEi-yPfzXvTFaKix63-HU3wnFewm26AuCGVPRYRn5sEMxscjIsXbB2nyIaLHhgUfQUhCNjLBWwqNLlOYYrUSI0Cpfljo5y0he4ua8DT7DDVO67qNHmbqP9JoeojmGvGEsGFMa89BybJtR4OPugQHgDrle_Kwbp552uz42okkEyE-7gl1WnRiV4D75g7ezWJkE2UNsMfVtNz-e1XgOI-WPwf8VBrS_H7gX8zp3AyN41tUgsE_38bcbnCwm5W3YphzlkpHmhQgNHqy-GgfuzLbM45YnIRh5oIgFPDc1ZrPpvGP5WzqUGVxEznVI1oVBBOBRIqsRhTTTn8ksemzP73n-w0C4KZEXJJmmTKUrg-gC24JjCFsYttedCFNgpbvMFyS9H3z5F1UhosTBMeVYSABHUOKQ0SwEebbOWXYPzN9kFP6QBqVxs4i19J9KLyu2pN56ZM_5c30C6ygGCH2fO8QC8UFW3xWrxa3ItT3ZSOtBMtaz7bqQfj1H8Qa2_hQK-tWHLUthJNxJ9BD0CTGUDVz9HenIxo0VFwDHuQPDesC9UexHV1Oh_EG0gKlfkAuH1ga5rkLejae0xFdQ2PICTHTLDR8on0XsmYDrneSK8iSzQMG1pF8oNINuZbELN9XwI2u8jS2LSOu9CMS1wBA=s858-no?authuser=0'
                break;
            case 'brewpub':
                return 'https://lh3.googleusercontent.com/IdJd9Fbq9hut-N5CO9CJwxOlo7mmdhoR0pk9Ye4pbxWrZK6CSvQRc1KntKFqlwO-9n3YMiQVZnPGRCHBlWReP8Lkta0RTR2Op9v1v5KOgZdZA_CfIV9jjGtZsrzYE9JB25f8NOH_S0d2VwGRVRyA4AcEEqvObNk67irDXvZTwes69CC7DxnT-3qgL02AA0PmG4XDPDw_nXljW9do38AggSqPjUmBCloFU1pKZ8wMT667NBTePkIYwMbxRwICK8qc9ZVh4XsdD-WOg1yA5A3IeFRsWzy4_Z1Y-hUFQNRDmnepu_wweFfm3WKOY8Ju6-Oy5PfOEaAKE7cSSZ0qOKZ5Bse__ImqPy6l2prr8kkoWq-FCwjLiwBSSPHbNXxhhSfE5I2GG9VGIPTVcUhGWl_Pwu5An-Cq51KYgnElkAGFmNrHDdnRMK0eS9dPElRgoAOa8srKmJXup-cYNGfN7lG6XqiYC0mUy9_ThbMs-cRJ298M3Qgf99VSNj-0ooeNxBekQF9OjOS9wIJep3ToksWklCUFXndzKtjTKnjv44MtbfWXiW4vgHirlRCgX8w8bA3DWYGCK6wG1QR6cqtyEAr738tibSozTBIzXgCDAqRHrX_4_xgiI6k1IzK6csmqhHIjI_hLFMSIBel6A6bZesGWxytfZlcqxpWpOnEFOTS80BHYTo9MOwyrD7Ch1lNZfufXJojSUzMnmvQXiiyJ7fidVg=s858-no?authuser=0'
                break;
            default: 
                return 'https://lh3.googleusercontent.com/BnPADuh6XNttO2R-PtfoBHEjtMAafAThaCxW3A2t5_YcUb2H36IN3Naf0eJH8KIyZ5ITxJOWvcwIHH3jQZpik8DtZQblhGorQzTLJC7DDvZ_YID4JKN7nrFdcbXLamX5HnlQ0DDm6vZ7-lHQlOi10S-sZECjbTbYPmH1zVhHctahvPfPUL-EXQ7bByxS7PXEMCFhXBv7RmZjod0AYyVScSd7SU5_EzBwvNhI7uD6ZqAIYaE8mPQwlmjHhnlmF2xvQluM0nVXcShNRWwKi7-bzw2zkPFs8w5Mzu9Ex71YgRCNn1UKgcXUzl7vkpiB10uy4HXRfuPoPOMM9BLBHks3SmY7JoRnGYilcAORQR4M1rggVcllMPKX_I-kemNCjKXb72wKF41lZxyqBnxlMB3F2h3_SxuWkxHP53_zFUd6FPqF1-Ng0cgAxI0yWzqC2l8JCDjy0WagLRBNWdsWkM0OjF_nEAQzlyj9OWvl2H9IEXszvWlQxdqj6sN80BAbXPdjMQX86ZipEFcv86ph-Cf5q9em2Kh0VbNO3WldrMrl5VYUpzX3ie2yynRv3n0bnzj13eeGlMyt3enMW6pp9W-nvbkyb7dbQquPFWgkhcbqb7yviJSHG81NR9prdGGn0O6uYDza7YhVTyvNXCSYxjWmCvLbrJMmc0k4_Ch8fiKuqBVdxC_L593AGYgNo1oxMw3Lj9NAtf8e7ER7XcMiBc5T0A=s858-no?authuser=0'
        }
    }

    return (
        <div className='ui card'>
            <div className='ui image'>
                <img className='ui small image centered' src={renderImage(brewery_type)} alt='beer'></img>
            </div>
            <div className='content'>
                <div className='header'>{name}</div>
                {street ? <span>{street}</span> : <span>---</span>}
                <div className='meta'> {city}, {state}</div>
                <span onClick={handleVisit}>{!compareArrayWithBrewery(visitedBreweries) ? <span><FaMap/>&nbsp;Visit Brewery</span> : <span id='visited'><FaMap/>&nbsp;Visited</span> }</span>
            </div>
            <div className='description'>
                {website_url ? <a href={website_url}>Visit Brewery Website</a> : <p>No Website Available 😒 </p>}
            </div>
            <div className='extra content'>
                <p>{phoneNumber}</p>
                <span className='right floated'>{brewery_type}</span>
            </div>
            { !compareArrayWithBrewery(favorites) ? 
            <div onClick={handleClick} className='ui button attached button'><FaBeer/>&nbsp;Add Favorite</div> : 
            <div onClick={handleClick} className='ui button attached button' id='added-btn'>Added to Your Favorites</div>
            }   
        </div>
    )
}

export default BreweryCard

