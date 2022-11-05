<template>
    <div class="dashboard-nav">
        <div class="dashboard-option">
            <div >
                <img src="../../assets/Images/Icons/message.svg" alt="icon" height="24" width="24">
                <span class="small-title">Message</span>
            </div>
            <span class="btn-dashboard">+</span>
        </div>
        <div class="dashboard-option">
            <div >
                <img src="../../assets/Images/Icons/forbidden.svg" alt="icon" height="24" width="24">
                <span class="small-title">Kick/Mute</span>
            </div>
            <span class="btn-dashboard">+</span>
        </div>
        <div class="dashboard-option">
            <div>
                <img src="../../assets/Images/Icons/music.svg" alt="icon" height="24" width="24">
                <span class="small-title">Music</span>
            </div>
            <span class="btn-dashboard">+</span>
        </div>
    </div>
</template>

<script>
// CSS
import '../../assets/CSS/reset-sheet.css';
import '../../assets/CSS/root.css';

export default {
    
}
</script>

<style scoped>
    .dashboard-nav{
        flex: 1;
        background: var(--cw-second);
        color: var(--cw-tent);
        padding: var(--S-padding);
    }

    .dashboard-option{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--XS-padding);
        border: 2px solid var(--cw-discord);
        border-radius: 16px;
        transition: 0.4s;
    }

    .dashboard-option:hover{ transform: translateY(-2px);}
    .dashboard-option div{  display: flex; align-items: center;}
    .dashboard-option:not(:last-child){ margin-bottom: var(--S-padding); }
    .dashboard-option span{ margin-left: var(--XS-padding); }

    /* BUTTON STYLE */
    .btn-dashboard{
        font-weight: 600;
    }

    .btn-dashboard:hover{ cursor: pointer; }
</style>