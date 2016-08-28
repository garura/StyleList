import React from 'react'
import ArticleStore from '../stores/articleStore'
import ArticleListItem from './articleListItem'
import ArticleDetail from './articleDetail'

export default class FilteredType extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayed: this.props.ids,
      type: this.props.type,
      items: [],
      focus: {}
    }
    this._generateList = this._generateList.bind(this);
    this._changeFocus = this._changeFocus.bind(this)
  }
  componentWillReceiveProps(newProps){
    let toDisplay = ArticleStore.getInfo(newProps.type.toLowerCase(), newProps.ids)
    this.setState({displayed: newProps.ids,
                  type: newProps.type,
                  items: toDisplay})
  }

  _changeFocus(item) {
    let that = this
    return () => {
      return that.setState({focus: item})
    }
  }

  _generateList(){
    if (this.state.type) {
      let that = this;
      return this.state.items.map((item) => {
        let callback = that._changeFocus(item)
        // feels hacky ^
        return <ArticleListItem onClick={callback} item={item} />
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
        <ArticleDetail info={this.state.focus}/>
      </div>
    )
  }
}
