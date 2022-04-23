import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout pagina='Nosotros'>
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
            </main>

            <div className={styles.contenido}>
                <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen nosotros"/>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo iaculis sapien, vitae vehicula augue interdum nec. Vestibulum ac tortor non nunc iaculis efficitur. Nullam gravida justo porta ligula fermentum, sed euismod ex scelerisque. Vestibulum pulvinar felis erat, a placerat purus dapibus non. Proin ultricies in tortor id dapibus. Nulla tristique pretium nisl vitae consectetur. Etiam in tortor finibus, pretium nibh at, ultrices sapien. Integer sed luctus magna, eget sollicitudin ipsum. Ut at elit odio. Praesent dignissim iaculis semper. Sed dignissim pharetra ultricies. Proin eu tortor tellus. Proin ac dui urna. Nam eget diam vitae enim porttitor sagittis. Sed ultricies ligula placerat leo aliquam accumsan. Donec leo massa, viverra vel sagittis ut, bibendum eu lectus.</p>

                    <p>Aliquam lectus nisi, aliquam ac diam nec, porta ultrices libero. Phasellus a pellentesque nunc, ut efficitur justo. Fusce id efficitur mauris. Morbi at tristique est. Proin turpis odio, tincidunt eget enim ac, tincidunt dignissim libero. Curabitur commodo feugiat nulla vitae elementum. Nam imperdiet blandit odio id tempor. Nam malesuada lectus a nulla eleifend, eu convallis diam volutpat. Proin eleifend, arcu vitae blandit tempus, neque mauris aliquet tellus, ac eleifend eros sem ac turpis. Phasellus ac egestas eros. Proin at molestie nibh, nec tempus turpis.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Nosotros
