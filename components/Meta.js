import Head from 'next/head'

const Meta = ({title, description, keywords}) => {
    return(
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}></meta>
            <meta name='keywords' content={keywords}></meta>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Kelly Hum | Personal Site',
    description: 'A student and developer. Curious about cybersecurity, accessible tech, and privacy within tech.'
}

export default Meta;