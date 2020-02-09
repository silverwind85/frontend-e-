import {css, html, LitElement} from 'lit-element';
// eslint-disable-next-line import/extensions
import {LoginService} from '../../../services/loginService';

export class LoginPage extends LitElement {
  static get styles() {
    return css`
      :host {
        background:rgba(58,63,68,0.5);
        border-radius: 5px;
        box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);
        width:450px;
        display: flex;
        flex-direction: column;
      }
    `;
  }

  static get properties() {
    return {
      title: {type: String},
      counter: {type: Number},
    };
  }

  constructor() {
    super();
    this.data = LoginService.createGist();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <div class="container">
    <div class="logo">Agent Q Dashboard</div>
    <div class="login-item">
      <form action="" method="post" class="form form-login">
        <div class="form-field">
          <label class="user" for="login-username"><span class="hidden">Username</span></label>
          <input id="login-username" type="text" class="form-input" placeholder="Username" required>
        </div>

        <div class="form-field">
          <label class="lock" for="login-password"><span class="hidden">Password</span></label>
          <input id="login-password" type="password" class="form-input" placeholder="Password" required>
        </div>

        <div class="form-field">
          <input type="submit" value="Log in">
        </div>
      </form>
    </div>
</div>
    `;
  }
}
