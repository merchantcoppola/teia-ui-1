/* eslint-disable react-hooks/exhaustive-deps */
import { Page } from '@atoms/layout'
import { Checkbox } from '@atoms/input'
import styles from '@style'
import { rpc_nodes, useLocalSettings } from '@context/localSettingsStore'
import { Select, ThemeSelection } from '@atoms/select'
import { Line } from '@atoms/line'

export const Settings = () => {
  const [
    nsfwFriendly,
    setNsfwFriendly,
    photosensitiveFriendly,
    setPhotosensitiveFriendly,
    rpcNode,
    setRpcNode,
  ] = useLocalSettings((st) => [
    st.nsfwFriendly,
    st.setNsfwFriendly,
    st.photosensitiveFriendly,
    st.setPhotosensitiveFriendly,
    st.rpcNode,
    st.setRpcNode,
  ])

  return (
    <Page>
      <div className={styles.info}>
        <h1>Local Settings</h1>
        <p>
          Those settings are non portable and only stored in your current
          browser cache.
        </p>
        <Line className={styles.title_line} />
      </div>
      <div className={styles.localSettings}>
        <div className={styles.fields}>
          <p>
            <strong>Feed preferences</strong>
          </p>
          <Checkbox
            alt={`click to ${
              nsfwFriendly ? 'disable' : 'enable'
            } the blurring of NSFW tokens on feeds`}
            checked={nsfwFriendly}
            onCheck={setNsfwFriendly}
            label={'Allow NSFW on feeds'}
          />
          <Checkbox
            alt={`click to ${
              photosensitiveFriendly ? 'disable' : 'enable'
            } the blurring of photosensitive tokens on feeds`}
            checked={photosensitiveFriendly}
            onCheck={setPhotosensitiveFriendly}
            label={'Allow Photosensitive on feeds'}
          />
          <Line />
          <ThemeSelection label={'Theme'} />
          <Line />

          <Select
            label={'RPC Node'}
            value={{ label: rpcNode, value: rpcNode }}
            options={rpc_nodes.map((e) => ({ label: e, value: e }))}
            onChange={(e) => {
              setRpcNode(e.value)
            }}
          />
        </div>
      </div>
    </Page>
  )
}
