import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Search } from './styles'

function SearchTransaction() {
    return (
        <Search>
            <input type="text" placeholder="Busque uma transação" />
            <button>
                <FaSearch />
                <span>Pesquisar</span>
            </button>
        </Search>
    )
}

export default SearchTransaction
