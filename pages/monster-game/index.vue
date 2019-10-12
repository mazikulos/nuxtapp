<template>
  <div class="monster-game">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1>KILL THE BEAST</h1>
        </div>
        <div class="col-12 text-center">
          <div v-if="start !== false || message.text !== null" class="card card-body mb-3">
            <div class="row">
              <div class="col-md-5">
                <LifeBar :hp="playersHP" />
                <ManaBar :mp="playerMP" />You
              </div>
              <div class="col-md-2 mt-2">VS</div>
              <div class="col-md-5">
                <LifeBar :hp="beastsHP" />Beast
              </div>
            </div>
          </div>
          <div class="card card-body flex-row justify-content-center mb-3">
            <template v-if="start == false">
              <Button
                id="start"
                :btnStyle="'btn-primary ml-1 mr-1'"
                @click="start = !start; reset()"
              >{{startButtonText}}</Button>
            </template>
            <template v-else>
              <Button :btnStyle="'btn-warning ml-1 mr-1'" @click="attack(); manaRegen()">Attack</Button>
              <Button
                :btnStyle="'btn-danger ml-1 mr-1'"
                @click="specialAttack()"
                :class="playerMP < specialAttackCost ? 'disabled' : ''"
              >Special Attack</Button>
              <Button
                :btnStyle="'btn-success ml-1 mr-1'"
                @click="heal(10)"
                :class="playerMP < healCost ? 'disabled' : ''"
              >Heal</Button>
              <Button :btnStyle="'btn-light ml-1 mr-1'" @click="giveUp()">Give Up</Button>
            </template>
          </div>
          <div
            v-if="message.text !== null"
            class="card card-body mb-3 text-center"
            :class="message.class"
          >{{ message.text }}</div>
          <div v-if="logs.length > 0" class="card card-body mb-3 text-center">
            <Logs :logs="logs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LifeBar from "@/components/Monster/LifeBar";
import ManaBar from "@/components/Monster/ManaBar";
import Logs from "@/components/Monster/Logs";

export default {
  components: {
    LifeBar,
    Logs,
    ManaBar
  },
  data() {
    return {
      start: false,
      playersHP: 100,
      beastsHP: 100,
      playerMP: 100,
      logs: [],
      min: 0,
      max: 10,
      restoreHP: 8,
      message: {
        text: null,
        class: null
      },
      startButtonText: "Start!",
      healCost: 30,
      specialAttackCost: 60
    };
  },
  methods: {
    attack() {
      this.message = { text: null, class: null };
      let playerHit = this.damage();
      this.beastsHP -= playerHit;
      if (playerHit === 0) {
        this.logs.push({ logPlayer: `You missed!` });
      } else {
        this.logs.push({
          logPlayer: `You hit the beast for ${playerHit} HP!`
        });
      }
      this.beastHit();
      this.checkWin();
    },
    specialAttack() {
      this.message = { text: null, class: null };
      if (event.target.classList.contains("disabled")) {
        this.message = {
          text: "Not enough mana!",
          class: "alert alert-danger"
        };
        return false;
      } else {
          this.useMana(this.specialAttackCost);
        let playerHit = this.damage() * 2;
        this.beastsHP -= playerHit;
        if (playerHit === 0) {
          this.logs.push({ logPlayer: `SPECIAL ATTACK: You missed!` });
        } else {
          this.logs.push({
            logPlayer: `SPECIAL ATTACK: You hit the beast for ${playerHit} HP!`
          });
        }
        this.beastHit();
        this.checkWin();
      }
    },
    damage: function() {
      return Math.max(Math.floor(Math.random() * this.max), this.min);
    },
    heal() {
      this.message = { text: null, class: null };
      if (event.target.classList.contains("disabled")) {
        this.message = {
          text: "Not enough mana!",
          class: "alert alert-danger"
        };
        return false;
      } else {
        this.useMana(this.healCost);
        this.playersHP += this.restoreHP;
        if (this.playersHP >= 100) {
          this.playersHP = 100;
        }
        this.logs.push({
          logPlayer: `You healed yourself for ${this.restoreHP} HP!`
        });
        this.beastHit();
        this.checkWin();
      }
    },
    beastHit() {
      let beastHit = this.damage();
      this.playersHP -= beastHit;
      if (beastHit === 0) {
        this.logs.push({ logBeast: `Beast missed!` });
      } else {
        this.logs.push({ logBeast: `Beast hits you for ${beastHit} HP!` });
      }
    },
    reset() {
      this.playersHP = 100;
      this.beastsHP = 100;
      this.playerMP = 100;
      this.message = { text: null, class: null };
      this.logs = [];
    },
    giveUp() {
      this.start = false;
      this.startButtonText = "Once again?";
      this.message = { text: "You gave up!", class: "alert alert-danger" };
    },
    checkWin() {
      if (this.playersHP <= 0) {
        this.playersHP = 0;
        this.start = false;
        this.startButtonText = "Once again?";
      }
      if (this.beastsHP <= 0) {
        this.beastsHP = 0;
        this.start = false;
        this.startButtonText = "Once again?";
      }
      if (this.playersHP <= 0 && this.beastsHP > 0) {
        this.message = { text: "You lost!", class: "alert alert-danger" };
      } else if (this.beastsHP <= 0 && this.playersHP > 0) {
        this.message = { text: "You won!", class: "alert alert-success" };
      } else if (this.beastsHP <= 0 && this.playersHP <= 0) {
        this.message = { text: "Draw!", class: "alert alert-info" };
      }
      return false;
    },
    useMana(cost) {
      this.playerMP -= cost;
    },
    manaRegen() {
      if (this.playerMP < 100) {
        this.playerMP += 10;
      }
    }
  }
};
</script>