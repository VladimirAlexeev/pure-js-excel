import { $ } from "../core/dom";
import { Page } from "../core/Page";

export class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'db').html(`
    <div class="db__header">
    <h1>Pure JS excel dashboard</h1>
  </div>

  <div class="db__new">
    <div class="db__view">
      <a href="#" class="db__create">
        New <br /> Table
      </a>
    </div>
  </div>

  <div class="db__table db__view">
    <div class="db__list-header">
      <span>Name</span>
      <span>Create date:</span>
    </div>

    <div class="db__list">
      <li class="db__record">
        <a href="#">Table: #1</a>
        <strong>27.04.2021</strong>
      </li>
    </div>

  </div>
    `);
  }
}