// TODO: write your code here

export default function lifeBar({ health }) {
  if (health < 15) {
    return 'critical';
  }
  if (health < 50 && health > 14) {
    return 'wounded';
  }
  return 'healthy';
}
