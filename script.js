
document.querySelector('#search').addEventListener('input', list)

function list() {
    const search = document.querySelector('#search')
    const filter = search.value.toLowerCase()
    const listItems = document.querySelectorAll('.person')

    listItems.forEach((item) => {
        let text = item.textContent
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    })
}

list()