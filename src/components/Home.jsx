import React from 'react'

import styles from './Home.module.scss'

function Home() {
    return (
        <article className={styles.home}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor urna vel arcu sollicitudin porta. Aliquam facilisis fermentum interdum. In fringilla, nisi eu hendrerit eleifend, ex neque ullamcorper lorem, quis convallis ligula nulla eget eros. Integer blandit tortor nec elementum condimentum. Pellentesque sagittis nibh et purus pretium efficitur. Duis molestie, felis vitae fringilla bibendum, quam mi egestas diam, in elementum neque arcu sed diam. Donec pretium augue et efficitur convallis.
            </p>
            <p>
                Nulla sit amet nulla sed risus convallis maximus. Nullam posuere, purus a iaculis vulputate, erat lorem semper mi, id pretium nulla sem a elit. Phasellus ex massa, laoreet eget augue sit amet, tempus consequat nibh. Nunc pharetra justo ullamcorper, egestas diam a, interdum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean et malesuada neque. Etiam erat diam, lobortis ut nisl ut, sollicitudin tempus urna. Nam ac odio mi.
            </p>
        </article>
    )
}

export default Home
