import React, { Component } from 'react'
import { Icon } from 'antd'

// hoc: 包装用户表单，增加数据管理能力，校验
function FormCreate (Comp) {
  return class extends Component {
    constructor (props) {
      super(props)
      this.options = {}
      this.state = {}
    }

    handleChange = e => {
      const { name, value } = e.target
      this.setState({
        [name]: value
      }, () => {
        // 设置变化后再校验
        console.log('----校验')
        this.validateField(name)
      })
    }

    validateField = field => {
      const rules = this.options[field].rules
      const ret = rules.some(rule => {
        // 只要有一项失败就失败
        if (rule.required) {
          if (!this.state[field]) {
            // 校验失败
            this.setState({
              [field + "Message"]: rule.message
            })
            return true  // 若有校验失败，返回ture
          }
        }
      })
      if (!ret) { // 没失败
        this.setState({
          [field + "Message"]: ''
        })
      }
      return !ret
    }
    // 校验所有字段
    validate = cb => {
      const rets = Object.keys(this.options).map(field => this.validateField(field))
      const ret = rets.every(v => v === true)
      cb(ret)
    }
    getFieldDec = (field, option, InputComp) => {
      this.options[field] = option
      return (
        <div>
          {
            React.cloneElement(InputComp, {
              name: field, // 控件内容
              value: this.state[field] || '', // 控件值,
              onChange: this.handleChange, // change 事件处理
              onFocus: this.handleFocus
            })
          }
          {/*{*/}
            {/*this.state[field + "Message"] && (*/}
              {/*<p style={{color: "red"}}>{this.state[field + "Message"] }</p>*/}
            {/*)*/}
          {/*}*/}
        </div>
      )
    }
    handleFocus = (e) => {
      const field = e.target.name
      this.setState({
        [field + 'Focus']: true
      })
    }

    // 判断组件是否被用户点击过
    isFieldTouched = field => {
      return !!this.state[field + 'Focus']
    }

    getFieldError = field => this.state[field + 'Message']

    render () {
      return <Comp
        {...this.props}
        validate={this.validate}
        getFieldDec={this.getFieldDec}
        isFieldTouched={this.isFieldTouched}
        getFieldError={this.getFieldError}
        value={this.state}/>
    }
  }
}


class FormItem extends Component {
  render () {
    return (
      <div className="form-item">
        {  this.props.children }
        {
          this.props.validateStatus === 'error' && (
            <p style={{ color: "red"}}>{this.props.help}</p>
          )
        }
      </div>
    )
  }
}

class Input extends Component {
  render () {
    return (
      <div>
        {this.props.prefix}
        <input {...this.props} />
      </div>
      )
  }
}

@FormCreate
class FormSample extends Component {
  onSubmit = () => {
    console.log(this.props.value)
    this.props.validate((isValid) => {
      if (isValid) {
        alert('校验成功')
      } else {
        alert('校验失败')
      }
    })
  }
  render () {
    const { getFieldDec, getFieldError, isFieldTouched  } = this.props
    const userNameError = isFieldTouched('userName') && getFieldError('userName')
    const passwordError = isFieldTouched('pwd') && getFieldError('pwd')
    return (
      <div>
      <FormItem validateStatus={userNameError ? 'error': ''}
                help={userNameError || '' }
      >
          {
            getFieldDec('userName', {
                rules: [{
                  required: true, message: '请填写用户名'
                }
                ]
              },
              <Input type='text' prefix={<Icon type="user" />}/>)
          }
      </FormItem>
        <FormItem validateStatus={passwordError ? 'error': ''}
                  help={passwordError || '' }>
        {
          getFieldDec('pwd', {
          rules: [{
          required: true, message: '请填写密码'
        }]
        },
    <Input type='password' prefix={<Icon type="lock" />} />)
        }
        </FormItem>
        <button onClick={this.onSubmit}>登录</button>
      </div>
    )
  }
}

export default FormSample