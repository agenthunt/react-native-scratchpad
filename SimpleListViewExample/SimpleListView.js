import React, {PropTypes,View,Text, ListView, StyleSheet} from 'react-native';

let items = ["hello", "hi", "wassup", "bye"];
export default class SimpleListView extends React.Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(items)
    }
  }
  renderRow(rowData, sectionID, rowID){
    return (<View style={styles.listItem}>
          <Text>
             {rowData}
          </Text>
    </View>)
  }
  render() {
    return (
      <ListView style={styles.listView} dataSource={this.state.dataSource}
                renderRow={this.renderRow}
              />);
  }
}

const styles = StyleSheet.create({
  listView: {
    marginTop: 64
  },
  listItem: {
    height: 64,
    borderBottomWidth:1,
    marginBottom: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
