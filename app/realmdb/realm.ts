import Realm from "realm"
import { Asset, Box } from "./schemas"

export const RealmDB = async () => {
  return await Realm.open({
    schema: [Asset, Box],
    schemaVersion: 2,
    deleteRealmIfMigrationNeeded: true,
  })
}
