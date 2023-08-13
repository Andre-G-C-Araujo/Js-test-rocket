/** {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-size: 62.5%;
    --sizeSmallB-: 2rem;
    --sizeMediumB-: 6rem;
    --sizeBigB-: 10rem;
    --smallSize-: 15rem;
    --mediumSize-: 25rem;
    --bigSize: 40rem;
    --hugeSize: 70rem;
  }
  
  body {
    display: grid;
    justify-content: center;
  
    width: 100%;
    height: 100vh;
  }
  
  .container {
    width: 100%;
    height: 70rem;
    padding: 0rem 1.6rem;
  
    background: #f9f4fb;
  
    > h1,
    h3 {
      text-align: center;
      padding: 0rem 0.8rem;
    }
  
    > h1 {
      font-size: 3.2rem;
      color: #b52184;
    }
  
    > h3 {
      font-size: 2rem;
      color: #312d64;
    }
  
    .setaBaixo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3.5rem;
    }
  }
  
  /* secondContent*/
  
  .middleContent {
    padding: 5.3rem 2.6rem;
    width: 38rem;
    height: 124rem;
  
    background: #312d64;
  
    > .firstGrid,
    .secondGrid,
    .thirdGrid {
      border-radius: 2rem;
  
      width: 32rem;
      height: 33.7rem;
  
      padding: 2.6rem;
      margin-bottom: 5.9rem;
  
      background: #ffffff;
  
      > h1 {
        margin-top: 1.5rem;
        color: #b52184;
        font-size: 3.2rem;
      }
  
      > p {
        margin-top: 1.5rem;
        font-size: 1.6rem;
      }
    }
  }
  
  /*lastContent 1-h1 2- inputs  1- textarea 1-footer*/
  
  .contactUs {
    width: 38rem;
    height: 56rem;
    font-size: 1.6rem;
  
    background: #f9f4fb;
  
    > h1 {
      padding: 5.8rem 2rem 2.7rem 5.3rem;
  
      color: #b52184;
      font-family: Mulish, sans-serif;
    }
  
    > input {
      display: block;
      margin: auto;
      width: 28rem;
      height: 4rem;
  
      border-radius: 1rem;
      border: black solid 2px;
  
      margin-bottom: 2rem;
  
      text-align: center;
    }
  
    > textarea {
      display: block;
      margin: auto;
      width: 28rem;
      height: 10rem;
  
      border-radius: 1rem;
      border: black solid 2px;
  
      margin-bottom: 2rem;
  
      text-align: center;
      font-family: Mulish, sans-serif;
    }
  
    > button {
      display: block;
  
      width: 12rem;
      height: 4rem;
  
      margin-left: 2.7rem;
  
      text-align: center;
      color: white;
  
      border-radius: 1rem;
  
      background: #302c63;
    }
  
    > footer {
      width: 100%;
  
      text-align: center;
      color: white;
  
      margin-top: 6rem;
      padding: 1rem;
  
      background: #302c63;
    }
  }
  
  @media (min-width: 600px) {
    :root {
      --bigSize-: 100%;
    }
  
    body {
      display: grid;
      grid-template-columns: max-content;
  
      height: 100%;
      width: fit-content;
    }
  
    .container {
      height: 70rem;
      width: var(--bigSize-);
  
      background: #f9f4fb;
  
      > h1,
      h3 {
        text-align: center;
        padding: 0rem 0.8rem;
      }
  
      > h1 {
        font-size: 3.2rem;
        color: #b52184;
      }
  
      > h3 {
        font-size: 2rem;
        color: #312d64;
      }
  
      .setaBaixo {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3.5rem;
      }
    }
  
    /* secondContent*/
  
    .middleContent {
      padding: 5.3rem 2.6rem;
      width: 38rem;
      height: 124rem;
  
      background: #312d64;
  
      > .firstGrid,
      .secondGrid,
      .thirdGrid {
        border-radius: 2rem;
  
        width: 32rem;
        height: 33.7rem;
  
        padding: 2.6rem;
        margin-bottom: 5.9rem;
  
        background: #ffffff;
  
        > h1 {
          margin-top: 1.5rem;
          color: #b52184;
          font-size: 3.2rem;
        }
  
        > p {
          margin-top: 1.5rem;
          font-size: 1.6rem;
        }
      }
    }
  
    /*lastContent 1-h1 2- inputs  1- textarea 1-footer*/
  
    .contactUs {
      width: 38rem;
      height: 56rem;
      font-size: 1.6rem;
  
      background: #f9f4fb;
  
      > h1 {
        padding: 5.8rem 2rem 2.7rem 5.3rem;
  
        color: #b52184;
        font-family: Mulish, sans-serif;
      }
  
      > input {
        display: block;
        margin: auto;
        width: 28rem;
        height: 4rem;
  
        border-radius: 1rem;
        border: black solid 2px;
  
        margin-bottom: 2rem;
  
        text-align: center;
      }
  
      > textarea {
        display: block;
        margin: auto;
        width: 28rem;
        height: 10rem;
  
        border-radius: 1rem;
        border: black solid 2px;
  
        margin-bottom: 2rem;
  
        text-align: center;
        font-family: Mulish, sans-serif;
      }
  
      > button {
        display: block;
  
        width: 12rem;
        height: 4rem;
  
        margin-left: 2.7rem;
  
        text-align: center;
        color: white;
  
        border-radius: 1rem;
  
        background: #302c63;
      }
  
      > footer {
        width: 100%;
  
        text-align: center;
        color: white;
  
        margin-top: 6rem;
        padding: 1rem;
  
        background: #302c63;
      }
    }
  }
  