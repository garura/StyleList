import React from 'react'
import ArticleStore from '../stores/articleStore'
import ArticleListItem from './articleListItem'

export default class FilteredType extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayed: this.props.ids,
      type: this.props.type
    }
    this._generateList = this._generateList.bind(this);
  }
  componentWillReceiveProps(newProps){
    this.setState({displayed: newProps.ids,
                  type: newProps.type});
  }
  _generateList(){
    if (this.state.type) {
      let toDisplay = ArticleStore.getInfo(this.state.type.toLowerCase(), this.state.displayed)
      return toDisplay.map((item) => {
        return <ArticleListItem item={item} />
      });
    }
    return;
  }
  render () {
    let list = this._generateList();
    return (
      <div className={"viewable-articles " + this.state.type}>
        <ul className="scroll-list">
          {list}
        </ul>
        <div className="article-detail">detail view</div>
      </div>
    )
  }
}
