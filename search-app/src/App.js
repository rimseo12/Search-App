import SearchHistory from './components/SearchHistory'
import SearchInput from './components/SearchInput'
import SearchResult from './components/SearchResult'
import { $ } from './util/index'
import { fetchJjals } from './api/index'

function App(target) {
  this.init = () => {
    this.$element = $(target)
    this.data = null
    this.searchHistory = new SearchHistory({
      target: "#search-history",
      onChange: this.onChange
    })
    this.searchInput = new SearchInput({
      target: "#search-keyword",
      onChange: this.onChange
    })
    this.searchResult = new SearchResult(null, "#search-result")
  }

  this.onChange = value => {
    this.setState({ text: value })
  }

  this.setState = async ({ text }) => {
    try {
      this.data = await fetchJjals({ text })
      this.searchInput.setState(text)
      this.searchHistory.setState(text)
      this.searchResult.setState(this.data)
    } catch (error) {
      console.log(error.message)
      alert("오류가 발생했습니다")
    }

  }

  this.init()
}

export default App;
