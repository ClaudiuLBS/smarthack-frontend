<template>
    <div class="dashboard-bot">

        <div class="dashboard-new-features">
            <div class="current-feature-btns">
                <input type="text" placeholder="Introduce your bot's name..." class="input-bot medium-title">
                <img src="../../assets/Images/Icons/delete.svg" class="btn-basic" alt="delete" height="24" width="24">
            </div>
        </div>

        <div class="dashboard-current-features">
            <div class="current-features">
                <div class="medium-title">BotName's features:</div>
                <div class="current-feature">
                    <div class="current-feature-btns">
                        <span class="small-title">FEATURE TITLE</span>
                        <img src="../../assets/Images/Icons/delete.svg" class="btn-basic" alt="delete" height="24" width="24">
                    </div>
                    
                    <p class="feature-type caption-text">Message</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores atque expedita adipisci quibusdam consequatur eveniet perferendis vel fuga at accusamus obcaecati, soluta voluptatibus vero animi optio aut non tempore architecto ipsum rerum. Natus, non. Quaerat voluptatem neque iusto distinctio. Vero doloribus, exercitationem voluptatem cumque architecto itaque aut dolor rerum impedit obcaecati quam pariatur molestiae fugit quod cupiditate deserunt sed quos inventore libero, similique, ipsa provident commodi quia? Error autem placeat architecto corrupti sed necessitatibus libero optio temporibus non provident voluptas officiis nobis est, dolores, iure quisquam delectus debitis dignissimos quas. Neque deserunt vel assumenda aperiam tempore quibusdam velit! Placeat, ipsam.</p>
                </div>  

            </div>
            
            <div class="btns-current-features">
                <button class="btn-basic btn-create-bot">CREATE</button>
                <button class="btn-basic btn-delete-bot">DELETE</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .dashboard-bot{
        flex: 9;
        display: flex;
        padding: var(--S-padding);
    }

    .dashboard-new-features,
    .dashboard-current-features{ flex: 1;}

    /* NEW FEATURES */
    .dashboard-new-features{
        display: flex;
        flex-direction: column;
        padding: var(--M-padding);
    }

    .input-bot{
        widows: 100%;
        padding: var(--S-padding);
        border: none;
    }

    /* CURRENT FEATURES */
    .current-features{
        display: flex;
        flex-direction: column;

        background: var(--cw-bg-tent);
        color: var(--cw-tent);
        padding: var(--M-padding);
        border-radius: 24px;
    }
    .current-features .medium-title{ margin-bottom: 8px;}

    /* EACH FEATURE */
    .current-feature{
        background: var(--cw-stroke);
        padding: var(--S-padding);
        border-radius: 16px;
    }

    .current-feature-btns{ display: flex; align-items: center; justify-content: space-between;}

    .current-feature .small-title{ font-weight: 500;}
    .current-feature p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;
    }

    .feature-type{
        max-width: 5rem;
        font-weight: 500;
        text-align: center;
        border-radius: 16px;
        border: 2px solid gray;
        padding: 4px;
        margin-bottom: var(--XS-padding);
    }

    /* BUTTONS FOR FEATURES */
    .btn-delete-feature{ 
        font-size: var(--M-title);
        font-weight: 600;
        color: var(--cw-tent);
    }

    .btns-current-features{ margin-top: var(--S-padding);}
    .btn-delete-bot, .btn-create-bot{ color: var(--cw-tent); }
    .btn-delete-bot{ background: transparent; color: var(--cw-main); border: 2px solid var(--cw-main);}
    .btn-create-bot{ background: var(--cw-stroke-tent); border: 2px solid var(--cw-stroke-tent); margin-right: var(--XS-padding);}
</style>