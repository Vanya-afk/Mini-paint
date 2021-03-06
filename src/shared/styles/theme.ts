export const theme = {
    textSize: {
        main: '22px',
        title: '30px',
        redirect: '40px'
    },
    backgroundColor: {
        main: '#1a1a1d',
        button: '#d2c1b5',
        modal: '#614b3e',
        input: '#9a7967',
        light: '#ffffff',
        dark: '#000000'
    },
    borders: {
        modal: '2px solid #8c7b73',
        paint: '#d2c1b5',
        modalRadius: '25px',
        inputRadius: '13px',
        loader: '#81b5de',
        loaderTop: '#0962ad'
    },
    Link: {
        color: '#d2c1b5',
        decoration: 'underline',
        transition: 'all 0.2s',
        hoverColor: '#ac9c8e'
    },
    textColors: {
        main: '#ffffff',
        dark: '#000000',
        placeholder: '#d5cccc',
        danger:'#ff0000',
        success:'#00FF00FF',
    },
    shadows:{
        canvasItems:'#4e4540'
    }
}

export  type  ThemeType = typeof theme

