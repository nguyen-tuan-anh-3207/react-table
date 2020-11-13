import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      filterName : '',
      filterStatus: -1 //all -1 , active : 1 , deacitve : 0
    }
  }
  onChange =(event) => {
    //console.log("done");
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(name === 'filterName' ? value:this.state.filterName,
                        name ==='filterStatus'? value : this.state.filterStatus)
    this.setState({
      [name]: value
    })
  }
  render(){
    var {filterName, filterStatus} = this.state;
    var {tasks} = this.props;
    var eleTasks = tasks.map((task,index) => {
      return <TaskItem  key= {task.id} 
                        index = {index}
                         task= {task}
                         onUpdateStatus = {this.props.onUpdateStatus} 
                        onDelete = {this.props.onDelete}
                        onUpdate = {this.props.onUpdate}
                         />
    })
  return (
   

             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  
                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng thái</th>
                            <th className="text-center">Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>
                            <input type="text"
                                   name="filterName" 
                                   id="input" 
                                   className="form-control"
                                   value = {filterName }
                                    onChange = {this.onChange }
                                   />

                            </td>
                            <td>
                                <select name="filterStatus" 
                                        id="input" 
                                        className="form-control" 
                                          value = {filterStatus }
                                          onChange = {this.onChange }>
                                  <option value={-1}>Tất cả</option>
                                  <option value={0}>Ẩn</option>
                                  <option value={1}>Kích hoạt</option>
                                </select>
                            </td>
                            <td></td>
                          </tr>
                                {eleTasks}
                        </tbody>
                      </table>
             </div>  

  
  )
}
}

export default TaskList;





















