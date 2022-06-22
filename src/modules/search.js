import getData from './getData'
import { searchFilter } from './filters';
import renderGoods from './renderGoods';


const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value

        getData().then((data) => {
            renderGoods(searchFilter(data, value))

        })
    })
}

export default search