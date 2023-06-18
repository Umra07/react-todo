import classes from './WelcomeBlock.module.scss';

const WelcomeBlock = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1>Welcome!</h1>
        <p>Please choose a folder or create a new one.</p>
      </div>
    </div>
  );
};

export default WelcomeBlock;
