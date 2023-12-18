<template>
  <div class="home">
    <button @click="send">发送订阅</button>
  </div>
</template>

<script setup lang="ts">
import { BasePlugin } from '@plaoc/plugins'
import type { $MMID } from '@plaoc/plugins'
import manifest from '../../manifest.json'

class SubPub extends BasePlugin {
  send() {
    return this.fetchApi('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: 'test-topic' }),
    }).object()
  }
}

const sp = new SubPub(manifest.id as $MMID)

const send = async () => {
  const resp = await sp.send()
  console.log('res: ', resp)
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: var(--c-text);
  padding: calc(var(--w-space) * 3) 0;
  margin: 0 auto;
}
</style>
