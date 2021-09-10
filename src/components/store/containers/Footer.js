import {connect} from 'react-redux'
import {saveTheme}  from '../actions/changeThemeAction'
import Footer from '../../layout/Footer'

const mapDisPathchToProps = dispatch => ({
      dispatch,
      saveColorTheme : color => dispatch(saveTheme(color))
})

function mapStateToProps(state){
      return {
            themeColor:state.color
      }
}

export default connect(mapStateToProps,mapDisPathchToProps)(Footer)