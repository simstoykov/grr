export const tables = [
  {
    "name":"account_policy_data",
    "description":"Additional OS X user account data from the AccountPolicy section of OpenDirectory.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/account_policy_data.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"User ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"creation_time",
        "description":"When the account was first created",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"failed_login_count",
        "description":"The number of failed login attempts using an incorrect password. Count resets after a correct password is entered.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"failed_login_timestamp",
        "description":"The time of the last failed login attempt. Resets after a correct password is entered",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"password_last_set_time",
        "description":"The time the password was last changed",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"acpi_tables",
    "description":"Firmware ACPI functional table common metadata and content.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/acpi_tables.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"ACPI table name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of compiled table data",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"md5",
        "description":"MD5 hash of table content",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"ad_config",
    "description":"OS X Active Directory configuration.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/ad_config.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"The OS X-specific configuration name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"domain",
        "description":"Active Directory trust domain",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"option",
        "description":"Canonical name of option",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Variable typed option value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"alf",
    "description":"OS X application layer firewall (ALF) service details.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/alf.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"allow_signed_enabled",
        "description":"1 If allow signed mode is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"firewall_unload",
        "description":"1 If firewall unloading enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"global_state",
        "description":"1 If the firewall is enabled with exceptions, 2 if the firewall is configured to block all incoming connections, else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"logging_enabled",
        "description":"1 If logging mode is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"logging_option",
        "description":"Firewall logging option",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"stealth_enabled",
        "description":"1 If stealth mode is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Application Layer Firewall version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"alf_exceptions",
    "description":"OS X application layer firewall (ALF) service exceptions.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/alf_exceptions.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Path to the executable that is excepted",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"Firewall exception state",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"alf_explicit_auths",
    "description":"ALF services explicitly allowed to perform networking.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/alf_explicit_auths.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"process",
        "description":"Process name explicitly allowed",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"app_schemes",
    "description":"OS X application schemes and handlers (e.g., http, file, mailto).",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/app_schemes.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"scheme",
        "description":"Name of the scheme/protocol",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"handler",
        "description":"Application label for the handler",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"enabled",
        "description":"1 if this handler is the OS default, else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"external",
        "description":"1 if this handler does NOT exist on OS X by default, else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"protected",
        "description":"1 if this handler is protected (reserved) by OS X, else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"apparmor_events",
    "description":"Track AppArmor events.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/apparmor_events.table",
    "platforms":[
      "linux"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"type",
        "description":"Event type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"message",
        "description":"Raw audit message",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of execution in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uptime",
        "description":"Time of execution in system uptime",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"apparmor",
        "description":"Apparmor Status like ALLOWED, DENIED etc.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"operation",
        "description":"Permission requested by the process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"parent",
        "description":"Parent process PID",
        "type":"unsigned_bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"profile",
        "description":"Apparmor profile name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Process name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process ID",
        "type":"unsigned_bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"comm",
        "description":"Command-line name of the command that was used to invoke the analyzed process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"denied_mask",
        "description":"Denied permissions for the process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"capname",
        "description":"Capability requested by the process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fsuid",
        "description":"Filesystem user ID",
        "type":"unsigned_bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ouid",
        "description":"Object owner's user ID",
        "type":"unsigned_bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"capability",
        "description":"Capability number",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"requested_mask",
        "description":"Requested access mask",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"info",
        "description":"Additional information",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"error",
        "description":"Error information",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"namespace",
        "description":"AppArmor namespace",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"label",
        "description":"AppArmor label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"apparmor_profiles",
    "description":"Track active AppArmor profiles.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/apparmor_profiles.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Unique, aa-status compatible, policy identifier.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Policy name.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"attach",
        "description":"Which executable(s) a profile will attach to.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mode",
        "description":"How the policy is applied.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha1",
        "description":"A unique hash that identifies this policy.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"appcompat_shims",
    "description":"Application Compatibility shims are a way to persist malware. This table presents the AppCompat Shim information from the registry in a nice format. See http://files.brucon.org/2015/Tomczak_and_Ballenthin_Shims_for_the_Win.pdf for more details.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/appcompat_shims.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"executable",
        "description":"Name of the executable that is being shimmed. This is pulled from the registry.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"This is the path to the SDB database.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Description of the SDB.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"install_time",
        "description":"Install time of the SDB",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of the SDB database.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sdb_id",
        "description":"Unique GUID of the SDB.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"apps",
    "description":"OS X applications installed in known search paths (e.g., /Applications).",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/apps.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"Name of the Name.app folder",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Absolute and full Name.app path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bundle_executable",
        "description":"Info properties CFBundleExecutable label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bundle_identifier",
        "description":"Info properties CFBundleIdentifier label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bundle_name",
        "description":"Info properties CFBundleName label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bundle_short_version",
        "description":"Info properties CFBundleShortVersionString label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bundle_version",
        "description":"Info properties CFBundleVersion label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bundle_package_type",
        "description":"Info properties CFBundlePackageType label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"environment",
        "description":"Application-set environment variables",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"element",
        "description":"Does the app identify as a background agent",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"compiler",
        "description":"Info properties DTCompiler label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"development_region",
        "description":"Info properties CFBundleDevelopmentRegion label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"display_name",
        "description":"Info properties CFBundleDisplayName label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"info_string",
        "description":"Info properties CFBundleGetInfoString label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"minimum_system_version",
        "description":"Minimum version of OS X required for the app to run",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"category",
        "description":"The UTI that categorizes the app for the App Store",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"applescript_enabled",
        "description":"Info properties NSAppleScriptEnabled label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"copyright",
        "description":"Info properties NSHumanReadableCopyright label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_opened_time",
        "description":"The time that the app was last used",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"apt_sources",
    "description":"Current list of APT repositories or software channels.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/apt_sources.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Repository name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source",
        "description":"Source file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"base_uri",
        "description":"Repository base URI",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"release",
        "description":"Release name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Repository source version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"maintainer",
        "description":"Repository maintainer",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"components",
        "description":"Repository components",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"architectures",
        "description":"Repository architectures",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"arp_cache",
    "description":"Address resolution cache, both static and dynamic (from ARP, NDP).",
    "url":"https://github.com/osquery/osquery/blob/master/specs/arp_cache.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"address",
        "description":"IPv4 address target",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mac",
        "description":"MAC address of broadcasted address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"interface",
        "description":"Interface of the network for the MAC",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"permanent",
        "description":"1 for true, 0 for false",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"asl",
    "description":"Queries the Apple System Log data structure for system events.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/asl.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"time",
        "description":"Unix timestamp.  Set automatically",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time_nano_sec",
        "description":"Nanosecond time.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"host",
        "description":"Sender's address (set by the server).",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sender",
        "description":"Sender's identification string.  Default is process name.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"facility",
        "description":"Sender's facility.  Default is 'user'.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Sending process ID encoded as a string.  Set automatically.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"GID that sent the log message (set by the server).",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"UID that sent the log message (set by the server).",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"level",
        "description":"Log level number.  See levels in asl.h.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"message",
        "description":"Message text.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ref_pid",
        "description":"Reference PID for messages proxied by launchd",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ref_proc",
        "description":"Reference process for messages proxied by launchd",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"extra",
        "description":"Extra columns, in JSON format. Queries against this column are performed entirely in SQLite, so do not benefit from efficient querying via asl.h.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"atom_packages",
    "description":"Lists all atom packages in a directory or globally installed in a system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/atom_packages.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Package display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Package supplied version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Package supplied description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Package's package.json path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"license",
        "description":"License for package",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"homepage",
        "description":"Package supplied homepage",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"The local user that owns the plugin",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"augeas",
    "description":"Configuration files parsed by augeas.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/augeas.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"node",
        "description":"The node path of the configuration item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"The value of the configuration item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"label",
        "description":"The label of the configuration item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"The path to the configuration file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"authenticode",
    "description":"File (executable, bundle, installer, disk) code signing status.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/authenticode.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Must provide a path or directory",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"original_program_name",
        "description":"The original program name that the publisher has signed",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"serial_number",
        "description":"The certificate serial number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"issuer_name",
        "description":"The certificate issuer name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subject_name",
        "description":"The certificate subject name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"result",
        "description":"The signature check result",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"authorization_mechanisms",
    "description":"OS X Authorization mechanisms database.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/authorization_mechanisms.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"label",
        "description":"Label of the authorization right",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"plugin",
        "description":"Authorization plugin name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mechanism",
        "description":"Name of the mechanism that will be called",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"privileged",
        "description":"If privileged it will run as root, else as an anonymous user",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"entry",
        "description":"The whole string entry",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"authorizations",
    "description":"OS X Authorization rights database.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/authorizations.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"label",
        "description":"Item name, usually in reverse domain format",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"modified",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"allow_root",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"timeout",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"tries",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"authenticate_user",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"shared",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"comment",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"created",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"class",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"session_owner",
        "description":"Label top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"authorized_keys",
    "description":"A line-delimited authorized_keys table.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/authorized_keys.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"The local owner of authorized_keys file",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"algorithm",
        "description":"algorithm of key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"parsed authorized keys line",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key_file",
        "description":"Path to the authorized_keys file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"autoexec",
    "description":"Aggregate of executables that will automatically execute on the target machine. This is an amalgamation of other tables like services, scheduled_tasks, startup_items and more.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/autoexec.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Path to the executable",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Name of the program",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source",
        "description":"Source table of the autoexec item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"azure_instance_metadata",
    "description":"Azure instance metadata.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/azure_instance_metadata.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"location",
        "description":"Azure Region the VM is running in",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Name of the VM",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"offer",
        "description":"Offer information for the VM image (Azure image gallery VMs only)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"publisher",
        "description":"Publisher of the VM image",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sku",
        "description":"SKU for the VM image",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Version of the VM image",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"os_type",
        "description":"Linux or Windows",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"platform_update_domain",
        "description":"Update domain the VM is running in",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"platform_fault_domain",
        "description":"Fault domain the VM is running in",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vm_id",
        "description":"Unique identifier for the VM",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vm_size",
        "description":"VM size",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subscription_id",
        "description":"Azure subscription for the VM",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"resource_group_name",
        "description":"Resource group for the VM",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"placement_group_id",
        "description":"Placement group for the VM scale set",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vm_scale_set_name",
        "description":"VM scale set name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"zone",
        "description":"Availability zone of the VM",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"azure_instance_tags",
    "description":"Azure instance tags.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/azure_instance_tags.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"vm_id",
        "description":"Unique identifier for the VM",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"The tag key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"The tag value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"background_activities_moderator",
    "description":"Background Activities Moderator (BAM) tracks application execution.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/background_activities_moderator.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Application file path.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_execution_time",
        "description":"Most recent time application was executed.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sid",
        "description":"User SID.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"battery",
    "description":"Provides information about the internal battery of a Macbook.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/battery.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"manufacturer",
        "description":"The battery manufacturer's name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"manufacture_date",
        "description":"The date the battery was manufactured UNIX Epoch",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model",
        "description":"The battery's model number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"serial_number",
        "description":"The battery's unique serial number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cycle_count",
        "description":"The number of charge/discharge cycles",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"health",
        "description":"One of the following: \"Good\" describes a well-performing battery, \"Fair\" describes a functional battery with limited capacity, or \"Poor\" describes a battery that's not capable of providing power",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"condition",
        "description":"One of the following: \"Normal\" indicates the condition of the battery is within normal tolerances, \"Service Needed\" indicates that the battery should be checked out by a licensed Mac repair service, \"Permanent Failure\" indicates the battery needs replacement",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"One of the following: \"AC Power\" indicates the battery is connected to an external power source, \"Battery Power\" indicates that the battery is drawing internal power, \"Off Line\" indicates the battery is off-line or no longer connected",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"charging",
        "description":"1 if the battery is currently being charged by a power source. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"charged",
        "description":"1 if the battery is currently completely charged. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"designed_capacity",
        "description":"The battery's designed capacity in mAh",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"max_capacity",
        "description":"The battery's actual capacity when it is fully charged in mAh",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"current_capacity",
        "description":"The battery's current charged capacity in mAh",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"percent_remaining",
        "description":"The percentage of battery remaining before it is drained",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"amperage",
        "description":"The battery's current amperage in mA",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"voltage",
        "description":"The battery's current voltage in mV",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"minutes_until_empty",
        "description":"The number of minutes until the battery is fully depleted. This value is -1 if this time is still being calculated",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"minutes_to_full_charge",
        "description":"The number of minutes until the battery is fully charged. This value is -1 if this time is still being calculated",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"bitlocker_info",
    "description":"Retrieve bitlocker status of the machine.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/bitlocker_info.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"device_id",
        "description":"ID of the encrypted drive.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"drive_letter",
        "description":"Drive letter of the encrypted drive.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"persistent_volume_id",
        "description":"Persistent ID of the drive.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"conversion_status",
        "description":"The bitlocker conversion status of the drive.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"protection_status",
        "description":"The bitlocker protection status of the drive.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"encryption_method",
        "description":"The encryption type of the device.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"The FVE metadata version of the drive.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"percentage_encrypted",
        "description":"The percentage of the drive that is encrypted.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"lock_status",
        "description":"The accessibility status of the drive from Windows.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"block_devices",
    "description":"Block (buffered access) device file nodes: disks, ramdisks, and DMG containers.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/block_devices.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Block device name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"parent",
        "description":"Block device parent name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vendor",
        "description":"Block device vendor string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model",
        "description":"Block device model string identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Block device size in blocks",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"block_size",
        "description":"Block size in bytes",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uuid",
        "description":"Block device Universally Unique Identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Block device type string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"label",
        "description":"Block device label string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"browser_plugins",
    "description":"All C/NPAPI browser plugin details for all users.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/browser_plugins.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"The local user that owns the plugin",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Plugin display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"identifier",
        "description":"Plugin identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Plugin short version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sdk",
        "description":"Build SDK used to compile plugin",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Plugin description text",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"development_region",
        "description":"Plugin language-localization",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"native",
        "description":"Plugin requires native execution",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to plugin bundle",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disabled",
        "description":"Is the plugin disabled. 1 = Disabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"carbon_black_info",
    "description":"Returns info about a Carbon Black sensor install.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/carbon_black_info.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"sensor_id",
        "description":"Sensor ID of the Carbon Black sensor",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"config_name",
        "description":"Sensor group",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_store_files",
        "description":"If the sensor is configured to send back binaries to the Carbon Black server",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_module_loads",
        "description":"If the sensor is configured to capture module loads",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_module_info",
        "description":"If the sensor is configured to collect metadata of binaries",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_file_mods",
        "description":"If the sensor is configured to collect file modification events",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_reg_mods",
        "description":"If the sensor is configured to collect registry modification events",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_net_conns",
        "description":"If the sensor is configured to collect network connections",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_processes",
        "description":"If the sensor is configured to process events",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_cross_processes",
        "description":"If the sensor is configured to cross process events",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_emet_events",
        "description":"If the sensor is configured to EMET events",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_data_file_writes",
        "description":"If the sensor is configured to collect non binary file writes",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_process_user_context",
        "description":"If the sensor is configured to collect the user running a process",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collect_sensor_operations",
        "description":"Unknown",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"log_file_disk_quota_mb",
        "description":"Event file disk quota in MB",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"log_file_disk_quota_percentage",
        "description":"Event file disk quota in a percentage",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"protection_disabled",
        "description":"If the sensor is configured to report tamper events",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sensor_ip_addr",
        "description":"IP address of the sensor",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sensor_backend_server",
        "description":"Carbon Black server",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"event_queue",
        "description":"Size in bytes of Carbon Black event files on disk",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"binary_queue",
        "description":"Size in bytes of binaries waiting to be sent to Carbon Black server",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"carves",
    "description":"List the set of completed and in-progress carves. If carve=1 then the query is treated as a new carve request.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/carves.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"time",
        "description":"Time at which the carve was kicked off",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha256",
        "description":"A SHA256 sum of the carved archive",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of the carved archive",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"The path of the requested carve",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"Status of the carve, can be STARTING, PENDING, SUCCESS, or FAILED",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"carve_guid",
        "description":"Identifying value of the carve session",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"carve",
        "description":"Set this value to '1' to start a file carve",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"certificates",
    "description":"Certificate Authorities installed in Keychains/ca-bundles.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/macwin/certificates.table",
    "platforms":[
      "darwin",
      "windows"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"common_name",
        "description":"Certificate CommonName",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subject",
        "description":"Certificate distinguished name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"issuer",
        "description":"Certificate issuer distinguished name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ca",
        "description":"1 if CA: true (certificate is an authority) else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"self_signed",
        "description":"1 if self-signed, else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"not_valid_before",
        "description":"Lower bound of valid date",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"not_valid_after",
        "description":"Certificate expiration data",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"signing_algorithm",
        "description":"Signing algorithm used",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key_algorithm",
        "description":"Key algorithm used",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key_strength",
        "description":"Key size used for RSA/DSA, or curve name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key_usage",
        "description":"Certificate key usage and extended key usage",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subject_key_id",
        "description":"SKID an optionally included SHA1",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"authority_key_id",
        "description":"AKID an optionally included SHA1",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha1",
        "description":"SHA1 hash of the raw certificate contents",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to Keychain or PEM bundle",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"serial",
        "description":"Certificate serial number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sid",
        "description":"SID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"store_location",
        "description":"Certificate system store location",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"store",
        "description":"Certificate system store",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"username",
        "description":"Username",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"store_id",
        "description":"Exists for service/user stores. Contains raw store id provided by WinAPI.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"chassis_info",
    "description":"Display information pertaining to the chassis and its security status.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/chassis_info.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"audible_alarm",
        "description":"If TRUE, the frame is equipped with an audible alarm.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"breach_description",
        "description":"If provided, gives a more detailed description of a detected security breach.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_types",
        "description":"A comma-separated list of chassis types, such as Desktop or Laptop.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"An extended description of the chassis if available.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"lock",
        "description":"If TRUE, the frame is equipped with a lock.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"manufacturer",
        "description":"The manufacturer of the chassis.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model",
        "description":"The model of the chassis.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"security_breach",
        "description":"The physical status of the chassis such as Breach Successful, Breach Attempted, etc.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"serial",
        "description":"The serial number of the chassis.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"smbios_tag",
        "description":"The assigned asset tag number of the chassis.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sku",
        "description":"The Stock Keeping Unit number if available.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"If available, gives various operational or nonoperational statuses such as OK, Degraded, and Pred Fail.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"visible_alarm",
        "description":"If TRUE, the frame is equipped with a visual alarm.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"chocolatey_packages",
    "description":"Chocolatey packages installed in a system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/chocolatey_packages.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Package display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Package-supplied version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"summary",
        "description":"Package-supplied summary",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"author",
        "description":"Optional package author",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"license",
        "description":"License under which package is launched",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path at which this package resides",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"chrome_extension_content_scripts",
    "description":"Chrome browser extension content scripts.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/chrome_extension_content_scripts.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"The local user that owns the extension",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"identifier",
        "description":"Extension identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Extension-supplied version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"script",
        "description":"The content script used by the extension",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"match",
        "description":"The pattern that the script is matched against",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"chrome_extensions",
    "description":"Chrome browser extensions.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/chrome_extensions.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"The local user that owns the extension",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Extension display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"profile",
        "description":"The Chrome profile that contains this extension",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"identifier",
        "description":"Extension identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Extension-supplied version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Extension-optional description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"locale",
        "description":"Default locale supported by extension",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"update_url",
        "description":"Extension-supplied update URI",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"author",
        "description":"Optional extension author",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"persistent",
        "description":"1 If extension is persistent across all tabs else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to extension folder",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"permissions",
        "description":"The permissions required by the extension",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"optional_permissions",
        "description":"The permissions optionally required by the extensions",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"connectivity",
    "description":"Provides the overall system's network state.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/connectivity.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"disconnected",
        "description":"True if the all interfaces are not connected to any network",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv4_no_traffic",
        "description":"True if any interface is connected via IPv4, but has seen no traffic",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv6_no_traffic",
        "description":"True if any interface is connected via IPv6, but has seen no traffic",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv4_subnet",
        "description":"True if any interface is connected to the local subnet via IPv4",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv4_local_network",
        "description":"True if any interface is connected to a routed network via IPv4",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv4_internet",
        "description":"True if any interface is connected to the Internet via IPv4",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv6_subnet",
        "description":"True if any interface is connected to the local subnet via IPv6",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv6_local_network",
        "description":"True if any interface is connected to a routed network via IPv6",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv6_internet",
        "description":"True if any interface is connected to the Internet via IPv6",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"cpu_info",
    "description":"Retrieve cpu hardware info of the machine.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/cpu_info.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"device_id",
        "description":"The DeviceID of the CPU.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model",
        "description":"The model of the CPU.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"manufacturer",
        "description":"The manufacturer of the CPU.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"processor_type",
        "description":"The processor type, such as Central, Math, or Video.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"availability",
        "description":"The availability and status of the CPU.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_status",
        "description":"The current operating status of the CPU.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"number_of_cores",
        "description":"The number of cores of the CPU.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"logical_processors",
        "description":"The number of logical processors of the CPU.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"address_width",
        "description":"The width of the CPU address bus.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"current_clock_speed",
        "description":"The current frequency of the CPU.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"max_clock_speed",
        "description":"The maximum possible frequency of the CPU.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"socket_designation",
        "description":"The assigned socket on the board for the given CPU.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"cpu_time",
    "description":"Displays information from /proc/stat file about the time the cpu cores spent in different parts of the system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/cpu_time.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"core",
        "description":"Name of the cpu (core)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user",
        "description":"Time spent in user mode",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"nice",
        "description":"Time spent in user mode with low priority (nice)",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"system",
        "description":"Time spent in system mode",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"idle",
        "description":"Time spent in the idle task",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"iowait",
        "description":"Time spent waiting for I/O to complete",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"irq",
        "description":"Time spent servicing interrupts",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"softirq",
        "description":"Time spent servicing softirqs",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"steal",
        "description":"Time spent in other operating systems when running in a virtualized environment",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"guest",
        "description":"Time spent running a virtual CPU for a guest OS under the control of the Linux kernel",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"guest_nice",
        "description":"Time spent running a niced guest ",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"cpuid",
    "description":"Useful CPU features from the cpuid ASM call.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/cpuid.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"feature",
        "description":"Present feature flags",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Bit value or string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"output_register",
        "description":"Register used to for feature value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"output_bit",
        "description":"Bit in register value for feature value",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"input_eax",
        "description":"Value of EAX used",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"crashes",
    "description":"Application, System, and Mobile App crash logs.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/crashes.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"type",
        "description":"Type of crash log",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process (or thread) ID of the crashed process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to the crashed process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"crash_path",
        "description":"Location of log file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"identifier",
        "description":"Identifier of the crashed process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Version info of the crashed process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"parent",
        "description":"Parent PID of the crashed process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"responsible",
        "description":"Process responsible for the crashed process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"User ID of the crashed process",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"datetime",
        "description":"Date/Time at which the crash occurred",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"crashed_thread",
        "description":"Thread ID which crashed",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"stack_trace",
        "description":"Most recent frame from the stack trace",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"exception_type",
        "description":"Exception type of the crash",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"exception_codes",
        "description":"Exception codes from the crash",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"exception_notes",
        "description":"Exception notes from the crash",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"registers",
        "description":"The value of the system registers",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"crontab",
    "description":"Line parsed values from system and user cron/tab.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/crontab.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"event",
        "description":"The job @event name (rare)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"minute",
        "description":"The exact minute for the job",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hour",
        "description":"The hour of the day for the job",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"day_of_month",
        "description":"The day of the month for the job",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"month",
        "description":"The month of the year for the job",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"day_of_week",
        "description":"The day of the week for the job",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"command",
        "description":"Raw command string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"File parsed",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"cups_destinations",
    "description":"Returns all configured printers.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/cups_destinations.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Name of the printer",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"option_name",
        "description":"Option name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"option_value",
        "description":"Option value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"cups_jobs",
    "description":"Returns all completed print jobs from cups.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/cups_jobs.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"title",
        "description":"Title of the printed job",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"destination",
        "description":"The printer the job was sent to",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user",
        "description":"The user who printed the job",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"format",
        "description":"The format of the print job",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"The size of the print job",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"completed_time",
        "description":"When the job completed printing",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"processing_time",
        "description":"How long the job took to process",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"creation_time",
        "description":"When the print request was initiated",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"curl",
    "description":"Perform an http request and return stats about it.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/curl.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"url",
        "description":"The url for the request",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"method",
        "description":"The HTTP method for the request",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user_agent",
        "description":"The user-agent string to use for the request",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"response_code",
        "description":"The HTTP status code for the response",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"round_trip_time",
        "description":"Time taken to complete the request",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bytes",
        "description":"Number of bytes in the response",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"result",
        "description":"The HTTP response body",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"curl_certificate",
    "description":"Inspect TLS certificates by connecting to input hostnames.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/curl_certificate.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"hostname",
        "description":"Hostname (domain[:port]) to CURL",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"common_name",
        "description":"Common name of company issued to",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"organization",
        "description":"Organization issued to",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"organization_unit",
        "description":"Organization unit issued to",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"serial_number",
        "description":"Certificate serial number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"issuer_common_name",
        "description":"Issuer common name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"issuer_organization",
        "description":"Issuer organization",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"issuer_organization_unit",
        "description":"Issuer organization unit",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"valid_from",
        "description":"Period of validity start date",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"valid_to",
        "description":"Period of validity end date",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha256_fingerprint",
        "description":"SHA-256 fingerprint",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha1_fingerprint",
        "description":"SHA1 fingerprint",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Version Number",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"signature_algorithm",
        "description":"Signature Algorithm",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"signature",
        "description":"Signature",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subject_key_identifier",
        "description":"Subject Key Identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"authority_key_identifier",
        "description":"Authority Key Identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key_usage",
        "description":"Usage of key in certificate",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"extended_key_usage",
        "description":"Extended usage of key in certificate",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"policies",
        "description":"Certificate Policies",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subject_alternative_names",
        "description":"Subject Alternative Name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"issuer_alternative_names",
        "description":"Issuer Alternative Name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"info_access",
        "description":"Authority Information Access",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subject_info_access",
        "description":"Subject Information Access",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"policy_mappings",
        "description":"Policy Mappings",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"has_expired",
        "description":"1 if the certificate has expired, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"basic_constraint",
        "description":"Basic Constraints",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name_constraints",
        "description":"Name Constraints",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"policy_constraints",
        "description":"Policy Constraints",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dump_certificate",
        "description":"Set this value to '1' to dump certificate",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"timeout",
        "description":"Set this value to the timeout in seconds to complete the TLS handshake (default 4s, use 0 for no timeout)",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"pem",
        "description":"Certificate PEM format",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"deb_packages",
    "description":"The installed DEB package database.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/deb_packages.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"Package name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Package version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source",
        "description":"Package source",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Package size in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"arch",
        "description":"Package architecture",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"revision",
        "description":"Package revision",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"Package status",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"maintainer",
        "description":"Package maintainer",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"section",
        "description":"Package section",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"priority",
        "description":"Package priority",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid_with_namespace",
        "description":"Pids that contain a namespace",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"mount_namespace_id",
        "description":"Mount namespace id",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"default_environment",
    "description":"Default environment variables and values.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/default_environment.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"variable",
        "description":"Name of the environment variable",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Value of the environment variable",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"expand",
        "description":"1 if the variable needs expanding, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"device_file",
    "description":"Similar to the file table, but use TSK and allow block address access.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/sleuthkit/device_file.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"device",
        "description":"Absolute file path to device node",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"partition",
        "description":"A partition number",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"path",
        "description":"A logical path within the device node",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"filename",
        "description":"Name portion of file path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inode",
        "description":"Filesystem inode number",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"Owning user ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"Owning group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mode",
        "description":"Permission bits",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of file in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"block_size",
        "description":"Block size of filesystem",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"atime",
        "description":"Last access time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mtime",
        "description":"Last modification time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ctime",
        "description":"Creation time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hard_links",
        "description":"Number of hard links",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"File status",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"device_firmware",
    "description":"A best-effort list of discovered firmware versions.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/device_firmware.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"type",
        "description":"Type of device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device",
        "description":"The device name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Firmware version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"device_hash",
    "description":"Similar to the hash table, but use TSK and allow block address access.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/sleuthkit/device_hash.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"device",
        "description":"Absolute file path to device node",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"partition",
        "description":"A partition number",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"inode",
        "description":"Filesystem inode number",
        "type":"bigint",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"md5",
        "description":"MD5 hash of provided inode data",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha1",
        "description":"SHA1 hash of provided inode data",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha256",
        "description":"SHA256 hash of provided inode data",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"device_partitions",
    "description":"Use TSK to enumerate details about partitions on a disk device.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/sleuthkit/device_partitions.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"device",
        "description":"Absolute file path to device node",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"partition",
        "description":"A partition number or description",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"label",
        "description":"",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"offset",
        "description":"",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"blocks_size",
        "description":"Byte size of each block",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"blocks",
        "description":"Number of blocks",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inodes",
        "description":"Number of meta nodes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flags",
        "description":"",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"disk_encryption",
    "description":"Disk encryption status and information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/disk_encryption.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Disk name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uuid",
        "description":"Disk Universally Unique Identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"encrypted",
        "description":"1 If encrypted: true (disk is encrypted), else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Description of cipher type and mode if available",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"Currently authenticated user if available (Apple)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user_uuid",
        "description":"UUID of authenticated user if available (Apple)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"encryption_status",
        "description":"Disk encryption status with one of following values: encrypted | not encrypted | undefined",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"disk_events",
    "description":"Track DMG disk image events (appearance/disappearance) when opened.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/disk_events.table",
    "platforms":[
      "darwin"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"action",
        "description":"Appear or disappear",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path of the DMG file accessed",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Disk event name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device",
        "description":"Disk event BSD name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uuid",
        "description":"UUID of the volume inside DMG if available",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of partition in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ejectable",
        "description":"1 if ejectable, 0 if not",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mountable",
        "description":"1 if mountable, 0 if not",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"writable",
        "description":"1 if writable, 0 if not",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"content",
        "description":"Disk event content",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"media_name",
        "description":"Disk event media name string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vendor",
        "description":"Disk event vendor string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"filesystem",
        "description":"Filesystem if available",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"checksum",
        "description":"UDIF Master checksum if available (CRC32)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of appearance/disappearance in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"disk_info",
    "description":"Retrieve basic information about the physical disks of a system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/disk_info.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"partitions",
        "description":"Number of detected partitions on disk.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disk_index",
        "description":"Physical drive number of the disk.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"The interface type of the disk.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"id",
        "description":"The unique identifier of the drive on the system.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pnp_device_id",
        "description":"The unique identifier of the drive on the system.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disk_size",
        "description":"Size of the disk.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"manufacturer",
        "description":"The manufacturer of the disk.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hardware_model",
        "description":"Hard drive model.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"The label of the disk object.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"serial",
        "description":"The serial number of the disk.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"The OS's description of the disk.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"dns_cache",
    "description":"Enumerate the DNS cache using the undocumented DnsGetCacheDataTable function in dnsapi.dll.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/dns_cache.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"DNS record name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"DNS record type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flags",
        "description":"DNS record flags",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"dns_resolvers",
    "description":"Resolvers used by this host.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/dns_resolvers.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Address type index or order",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Address type: sortlist, nameserver, search",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"address",
        "description":"Resolver IP/IPv6 address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"netmask",
        "description":"Address (sortlist) netmask length",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"options",
        "description":"Resolver options",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_container_fs_changes",
    "description":"Changes to files or directories on container's filesystem.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_container_fs_changes.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Container ID",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"path",
        "description":"FIle or directory path relative to rootfs",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"change_type",
        "description":"Type of change: C:Modified, A:Added, D:Deleted",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_container_labels",
    "description":"Docker container labels.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_container_labels.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Container ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"Label key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Optional label value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_container_mounts",
    "description":"Docker container mounts.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_container_mounts.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Container ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of mount (bind, volume)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Optional mount name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source",
        "description":"Source path on host",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"destination",
        "description":"Destination path inside container",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver",
        "description":"Driver providing the mount",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mode",
        "description":"Mount options (rw, ro)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rw",
        "description":"1 if read/write. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"propagation",
        "description":"Mount propagation",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_container_networks",
    "description":"Docker container networks.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_container_networks.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Container ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Network name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"network_id",
        "description":"Network ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"endpoint_id",
        "description":"Endpoint ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gateway",
        "description":"Gateway",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ip_address",
        "description":"IP address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ip_prefix_len",
        "description":"IP subnet prefix length",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv6_gateway",
        "description":"IPv6 gateway",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv6_address",
        "description":"IPv6 address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv6_prefix_len",
        "description":"IPv6 subnet prefix length",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mac_address",
        "description":"MAC address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_container_ports",
    "description":"Docker container ports.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_container_ports.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Container ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Protocol (tcp, udp)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port",
        "description":"Port inside the container",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"host_ip",
        "description":"Host IP address on which public port is listening",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"host_port",
        "description":"Host port",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_container_processes",
    "description":"Docker container processes.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_container_processes.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Container ID",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"The process path or shorthand argv[0]",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cmdline",
        "description":"Complete argv",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"Process state",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"User ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"Group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"euid",
        "description":"Effective user ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"egid",
        "description":"Effective group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"suid",
        "description":"Saved user ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sgid",
        "description":"Saved group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"wired_size",
        "description":"Bytes of unpagable memory used by process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"resident_size",
        "description":"Bytes of private memory used by process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"total_size",
        "description":"Total virtual memory size",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"start_time",
        "description":"Process start in seconds since boot (non-sleeping)",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"parent",
        "description":"Process parent's PID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pgroup",
        "description":"Process group",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"threads",
        "description":"Number of threads used by process",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"nice",
        "description":"Process nice level (-20 to 20, default 0)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user",
        "description":"User name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Cumulative CPU time. [DD-]HH:MM:SS format",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu",
        "description":"CPU utilization as percentage",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mem",
        "description":"Memory utilization as percentage",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_container_stats",
    "description":"Docker container statistics. Queries on this table take at least one second.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_container_stats.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Container ID",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"name",
        "description":"Container name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pids",
        "description":"Number of processes",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"read",
        "description":"UNIX time when stats were read",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"preread",
        "description":"UNIX time when stats were last read",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"interval",
        "description":"Difference between read and preread in nano-seconds",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disk_read",
        "description":"Total disk read bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disk_write",
        "description":"Total disk write bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"num_procs",
        "description":"Number of processors",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_total_usage",
        "description":"Total CPU usage",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_kernelmode_usage",
        "description":"CPU kernel mode usage",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_usermode_usage",
        "description":"CPU user mode usage",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"system_cpu_usage",
        "description":"CPU system usage",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"online_cpus",
        "description":"Online CPUs",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pre_cpu_total_usage",
        "description":"Last read total CPU usage",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pre_cpu_kernelmode_usage",
        "description":"Last read CPU kernel mode usage",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pre_cpu_usermode_usage",
        "description":"Last read CPU user mode usage",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pre_system_cpu_usage",
        "description":"Last read CPU system usage",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pre_online_cpus",
        "description":"Last read online CPUs",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_usage",
        "description":"Memory usage",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_max_usage",
        "description":"Memory maximum usage",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_limit",
        "description":"Memory limit",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"network_rx_bytes",
        "description":"Total network bytes read",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"network_tx_bytes",
        "description":"Total network bytes transmitted",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_containers",
    "description":"Docker containers information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_containers.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Container ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Container name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"image",
        "description":"Docker image (name) used to launch this container",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"image_id",
        "description":"Docker image ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"command",
        "description":"Command with arguments",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"created",
        "description":"Time of creation as UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"Container state (created, restarting, running, removing, paused, exited, dead)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"Container status information",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Identifier of the initial process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Container path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"config_entrypoint",
        "description":"Container entrypoint(s)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"started_at",
        "description":"Container start time as string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"finished_at",
        "description":"Container finish time as string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"privileged",
        "description":"Is the container privileged",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"security_options",
        "description":"List of container security options",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"env_variables",
        "description":"Container environmental variables",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"readonly_rootfs",
        "description":"Is the root filesystem mounted as read only",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cgroup_namespace",
        "description":"cgroup namespace",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"ipc_namespace",
        "description":"IPC namespace",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"mnt_namespace",
        "description":"Mount namespace",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"net_namespace",
        "description":"Network namespace",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"pid_namespace",
        "description":"PID namespace",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"user_namespace",
        "description":"User namespace",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"uts_namespace",
        "description":"UTS namespace",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_image_labels",
    "description":"Docker image labels.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_image_labels.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Image ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"Label key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Optional label value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_image_layers",
    "description":"Docker image layers information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_image_layers.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Image ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"layer_id",
        "description":"Layer ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"layer_order",
        "description":"Layer Order (1 = base layer)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_images",
    "description":"Docker images information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_images.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Image ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"created",
        "description":"Time of creation as UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size_bytes",
        "description":"Size of image in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"tags",
        "description":"Comma-separated list of repository tags",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_info",
    "description":"Docker system information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_info.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"id",
        "description":"Docker system ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"containers",
        "description":"Total number of containers",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"containers_running",
        "description":"Number of containers currently running",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"containers_paused",
        "description":"Number of containers in paused state",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"containers_stopped",
        "description":"Number of containers in stopped state",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"images",
        "description":"Number of images",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"storage_driver",
        "description":"Storage driver",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_limit",
        "description":"1 if memory limit support is enabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"swap_limit",
        "description":"1 if swap limit support is enabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"kernel_memory",
        "description":"1 if kernel memory limit support is enabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_cfs_period",
        "description":"1 if CPU Completely Fair Scheduler (CFS) period support is enabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_cfs_quota",
        "description":"1 if CPU Completely Fair Scheduler (CFS) quota support is enabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_shares",
        "description":"1 if CPU share weighting support is enabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_set",
        "description":"1 if CPU set selection support is enabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv4_forwarding",
        "description":"1 if IPv4 forwarding is enabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bridge_nf_iptables",
        "description":"1 if bridge netfilter iptables is enabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bridge_nf_ip6tables",
        "description":"1 if bridge netfilter ip6tables is enabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"oom_kill_disable",
        "description":"1 if Out-of-memory kill is disabled. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"logging_driver",
        "description":"Logging driver",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cgroup_driver",
        "description":"Control groups driver",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"kernel_version",
        "description":"Kernel version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"os",
        "description":"Operating system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"os_type",
        "description":"Operating system type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"architecture",
        "description":"Hardware architecture",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpus",
        "description":"Number of CPUs",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory",
        "description":"Total memory",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"http_proxy",
        "description":"HTTP proxy",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"https_proxy",
        "description":"HTTPS proxy",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"no_proxy",
        "description":"Comma-separated list of domain extensions proxy should not be used for",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Name of the docker host",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"server_version",
        "description":"Server version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"root_dir",
        "description":"Docker root directory",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_network_labels",
    "description":"Docker network labels.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_network_labels.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Network ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"Label key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Optional label value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_networks",
    "description":"Docker networks information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_networks.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Network ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Network name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver",
        "description":"Network driver",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"created",
        "description":"Time of creation as UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"enable_ipv6",
        "description":"1 if IPv6 is enabled on this network. 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subnet",
        "description":"Network subnet",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gateway",
        "description":"Network gateway",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_version",
    "description":"Docker version information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_version.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"version",
        "description":"Docker version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"api_version",
        "description":"API version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"min_api_version",
        "description":"Minimum API version supported",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"git_commit",
        "description":"Docker build git commit",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"go_version",
        "description":"Go version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"os",
        "description":"Operating system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"arch",
        "description":"Hardware architecture",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"kernel_version",
        "description":"Kernel version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"build_time",
        "description":"Build time",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_volume_labels",
    "description":"Docker volume labels.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_volume_labels.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Volume name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"Label key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Optional label value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"docker_volumes",
    "description":"Docker volumes information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/docker_volumes.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Volume name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver",
        "description":"Volume driver",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mount_point",
        "description":"Mount point",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Volume type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"drivers",
    "description":"Details for in-use Windows device drivers. This does not display installed but unused drivers.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/drivers.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"device_id",
        "description":"Device ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device_name",
        "description":"Device name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"image",
        "description":"Path to driver image file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Driver description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"service",
        "description":"Driver service name, if one exists",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"service_key",
        "description":"Driver service registry key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Driver version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inf",
        "description":"Associated inf file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"class",
        "description":"Device/driver class name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"provider",
        "description":"Driver provider",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"manufacturer",
        "description":"Device manufacturer",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver_key",
        "description":"Driver key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"date",
        "description":"Driver date",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"signed",
        "description":"Whether the driver is signed or not",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"ec2_instance_metadata",
    "description":"EC2 instance metadata.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/ec2_instance_metadata.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"instance_id",
        "description":"EC2 instance ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"instance_type",
        "description":"EC2 instance type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"architecture",
        "description":"Hardware architecture of this EC2 instance",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"region",
        "description":"AWS region in which this instance launched",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"availability_zone",
        "description":"Availability zone in which this instance launched",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"local_hostname",
        "description":"Private IPv4 DNS hostname of the first interface of this instance",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"local_ipv4",
        "description":"Private IPv4 address of the first interface of this instance",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mac",
        "description":"MAC address for the first network interface of this EC2 instance",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"security_groups",
        "description":"Comma separated list of security group names",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"iam_arn",
        "description":"If there is an IAM role associated with the instance, contains instance profile ARN",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ami_id",
        "description":"AMI ID used to launch this EC2 instance",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"reservation_id",
        "description":"ID of the reservation",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"account_id",
        "description":"AWS account ID which owns this EC2 instance",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ssh_public_key",
        "description":"SSH public key. Only available if supplied at instance launch time",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"ec2_instance_tags",
    "description":"EC2 instance tag key value pairs.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/ec2_instance_tags.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"instance_id",
        "description":"EC2 instance ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"Tag key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Tag value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"elf_dynamic",
    "description":"ELF dynamic section information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/elf_dynamic.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"tag",
        "description":"Tag ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Tag value",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"class",
        "description":"Class (32 or 64)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to ELF file",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      }
    ]
  },
  {
    "name":"elf_info",
    "description":"ELF file information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/elf_info.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"class",
        "description":"Class type, 32 or 64bit",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"abi",
        "description":"Section type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"abi_version",
        "description":"Section virtual address in memory",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Offset of section in file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"machine",
        "description":"Machine type",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Object file version",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"entry",
        "description":"Entry point address",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flags",
        "description":"ELF header flags",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to ELF file",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      }
    ]
  },
  {
    "name":"elf_sections",
    "description":"ELF section information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/elf_sections.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Section name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Section type",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vaddr",
        "description":"Section virtual address in memory",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"offset",
        "description":"Offset of section in file",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of section",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flags",
        "description":"Section attributes",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"link",
        "description":"Link to other section",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"align",
        "description":"Segment alignment",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to ELF file",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      }
    ]
  },
  {
    "name":"elf_segments",
    "description":"ELF segment information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/elf_segments.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Segment type/name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"offset",
        "description":"Segment offset in file",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vaddr",
        "description":"Segment virtual address in memory",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"psize",
        "description":"Size of segment in file",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"msize",
        "description":"Segment offset in memory",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flags",
        "description":"Segment attributes",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"align",
        "description":"Segment alignment",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to ELF file",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      }
    ]
  },
  {
    "name":"elf_symbols",
    "description":"ELF symbol list.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/elf_symbols.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Symbol name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"addr",
        "description":"Symbol address (value)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of object",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Symbol type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"binding",
        "description":"Binding type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"offset",
        "description":"Section table index",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"table",
        "description":"Table name containing symbol",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to ELF file",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      }
    ]
  },
  {
    "name":"etc_hosts",
    "description":"Line-parsed /etc/hosts.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/etc_hosts.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"address",
        "description":"IP address mapping",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hostnames",
        "description":"Raw hosts mapping",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"etc_protocols",
    "description":"Line-parsed /etc/protocols.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/etc_protocols.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"Protocol name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"number",
        "description":"Protocol number",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"alias",
        "description":"Protocol alias",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"comment",
        "description":"Comment with protocol description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"etc_services",
    "description":"Line-parsed /etc/services.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/etc_services.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"Service name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port",
        "description":"Service port number",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"protocol",
        "description":"Transport protocol (TCP/UDP)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"aliases",
        "description":"Optional space separated list of other names for a service",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"comment",
        "description":"Optional comment for a service.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"event_taps",
    "description":"Returns information about installed event taps.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/event_taps.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"enabled",
        "description":"Is the Event Tap enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"event_tap_id",
        "description":"Unique ID for the Tap",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"event_tapped",
        "description":"The mask that identifies the set of events to be observed.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"process_being_tapped",
        "description":"The process ID of the target application",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"tapping_process",
        "description":"The process ID of the application that created the event tap.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"example",
    "description":"This is an example table spec.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/example.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Description for name column",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"points",
        "description":"This is a signed SQLite int column",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"This is a signed SQLite bigint column",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"action",
        "description":"Action performed in generation",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"id",
        "description":"An index of some sort",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path of example",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"extended_attributes",
    "description":"Returns the extended attributes for files (similar to Windows ADS).",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/extended_attributes.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Absolute file path",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"directory",
        "description":"Directory of file(s)",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"key",
        "description":"Name of the value generated from the extended attribute",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"The parsed information from the attribute",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"base64",
        "description":"1 if the value is base64 encoded else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"fan_speed_sensors",
    "description":"Fan speeds.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/fan_speed_sensors.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"fan",
        "description":"Fan number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Fan name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"actual",
        "description":"Actual speed",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"min",
        "description":"Minimum speed",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"max",
        "description":"Maximum speed",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"target",
        "description":"Target speed",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"fbsd_kmods",
    "description":"Loaded FreeBSD kernel modules.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/freebsd/fbsd_kmods.table",
    "platforms":[
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Module name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of module content",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"refs",
        "description":"Module reverse dependencies",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"address",
        "description":"Kernel module address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"file",
    "description":"Interactive filesystem attributes and metadata.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/utility/file.table",
    "platforms":[
      "darwin",
      "linux",
      "freebsd",
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Absolute file path",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"directory",
        "description":"Directory of file(s)",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"filename",
        "description":"Name portion of file path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inode",
        "description":"Filesystem inode number",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"Owning user ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"Owning group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mode",
        "description":"Permission bits",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device",
        "description":"Device ID (optional)",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of file in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"block_size",
        "description":"Block size of filesystem",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"atime",
        "description":"Last access time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mtime",
        "description":"Last modification time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ctime",
        "description":"Last status change time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"btime",
        "description":"(B)irth or (cr)eate time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hard_links",
        "description":"Number of hard links",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"symlink",
        "description":"1 if the path is a symlink, otherwise 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"File status",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"attributes",
        "description":"File attrib string. See: https://ss64.com/nt/attrib.html",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"volume_serial",
        "description":"Volume serial number",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"file_id",
        "description":"file ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"file_version",
        "description":"File version",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"product_version",
        "description":"File product version",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"bsd_flags",
        "description":"The BSD file flags (chflags). Possible values: NODUMP, UF_IMMUTABLE, UF_APPEND, OPAQUE, HIDDEN, ARCHIVED, SF_IMMUTABLE, SF_APPEND",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid_with_namespace",
        "description":"Pids that contain a namespace",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"mount_namespace_id",
        "description":"Mount namespace id",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"file_events",
    "description":"Track time/action changes to files specified in configuration data.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/file_events.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"target_path",
        "description":"The path associated with the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"category",
        "description":"The category of the file defined in the config",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"action",
        "description":"Change action (UPDATE, REMOVE, etc)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"transaction_id",
        "description":"ID used during bulk update",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inode",
        "description":"Filesystem inode number",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"Owning user ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"Owning group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mode",
        "description":"Permission bits",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of file in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"atime",
        "description":"Last access time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mtime",
        "description":"Last modification time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ctime",
        "description":"Last status change time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"md5",
        "description":"The MD5 of the file after change",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha1",
        "description":"The SHA1 of the file after change",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha256",
        "description":"The SHA256 of the file after change",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hashed",
        "description":"1 if the file was hashed, 0 if not, -1 if hashing failed",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of file event",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"firefox_addons",
    "description":"Firefox browser extensions, webapps, and addons.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/firefox_addons.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"The local user that owns the addon",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Addon display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"identifier",
        "description":"Addon identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"creator",
        "description":"Addon-supported creator string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Extension, addon, webapp",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Addon-supplied version string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Addon-supplied description string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source_url",
        "description":"URL that installed the addon",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"visible",
        "description":"1 If the addon is shown in browser else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"active",
        "description":"1 If the addon is active else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disabled",
        "description":"1 If the addon is application-disabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"autoupdate",
        "description":"1 If the addon applies background updates else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"native",
        "description":"1 If the addon includes binary components else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"location",
        "description":"Global, profile location",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to plugin bundle",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"gatekeeper",
    "description":"OS X Gatekeeper Details.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/gatekeeper.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"assessments_enabled",
        "description":"1 If a Gatekeeper is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dev_id_enabled",
        "description":"1 If a Gatekeeper allows execution from identified developers else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Version of Gatekeeper's gke.bundle",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"opaque_version",
        "description":"Version of Gatekeeper's gkopaque.bundle",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"gatekeeper_approved_apps",
    "description":"Gatekeeper apps a user has allowed to run.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/gatekeeper_approved_apps.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Path of executable allowed to run",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"requirement",
        "description":"Code signing requirement language",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ctime",
        "description":"Last change time",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mtime",
        "description":"Last modification time",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"groups",
    "description":"Local system groups.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/groups.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"gid",
        "description":"Unsigned int64 group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid_signed",
        "description":"A signed int64 version of gid",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"groupname",
        "description":"Canonical local group name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"group_sid",
        "description":"Unique group ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"comment",
        "description":"Remarks or comments associated with the group",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"is_hidden",
        "description":"IsHidden attribute set in OpenDirectory",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"hardware_events",
    "description":"Hardware (PCI/USB/HID) events from UDEV or IOKit.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/hardware_events.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"action",
        "description":"Remove, insert, change properties, etc",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Local device path assigned (optional)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of hardware and hardware event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver",
        "description":"Driver claiming the device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vendor",
        "description":"Hardware device vendor",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vendor_id",
        "description":"Hex encoded Hardware vendor identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model",
        "description":"Hardware device model",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model_id",
        "description":"Hex encoded Hardware model identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"serial",
        "description":"Device serial (optional)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"revision",
        "description":"Device revision (optional)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of hardware event",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"hash",
    "description":"Filesystem hash data.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/hash.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Must provide a path or directory",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"directory",
        "description":"Must provide a path or directory",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"md5",
        "description":"MD5 hash of provided filesystem data",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha1",
        "description":"SHA1 hash of provided filesystem data",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha256",
        "description":"SHA256 hash of provided filesystem data",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ssdeep",
        "description":"ssdeep hash of provided filesystem data",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid_with_namespace",
        "description":"Pids that contain a namespace",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"mount_namespace_id",
        "description":"Mount namespace id",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"homebrew_packages",
    "description":"The installed homebrew package database.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/homebrew_packages.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"Package name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Package install path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Current 'linked' version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"hvci_status",
    "description":"Retrieve HVCI info of the machine.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/hvci_status.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"version",
        "description":"The version number of the Device Guard build.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"instance_identifier",
        "description":"The instance ID of Device Guard.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vbs_status",
        "description":"The status of the virtualization based security settings. Returns UNKNOWN if an error is encountered.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"code_integrity_policy_enforcement_status",
        "description":"The status of the code integrity policy enforcement settings. Returns UNKNOWN if an error is encountered.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"umci_policy_status",
        "description":"The status of the User Mode Code Integrity security settings. Returns UNKNOWN if an error is encountered.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"ibridge_info",
    "description":"Information about the Apple iBridge hardware controller.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/ibridge_info.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"boot_uuid",
        "description":"Boot UUID of the iBridge controller",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"coprocessor_version",
        "description":"The manufacturer and chip version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"firmware_version",
        "description":"The build version of the firmware",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"unique_chip_id",
        "description":"Unique id of the iBridge controller",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"ie_extensions",
    "description":"Internet Explorer browser extensions.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/ie_extensions.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Extension display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"registry_path",
        "description":"Extension identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Version of the executable",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to executable",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"intel_me_info",
    "description":"Intel ME/CSE Info.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linwin/intel_me_info.table",
    "platforms":[
      "darwin",
      "linux",
      "freebsd",
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"version",
        "description":"Intel ME version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"interface_addresses",
    "description":"Network interfaces and relevant metadata.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/interface_addresses.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"interface",
        "description":"Interface name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"address",
        "description":"Specific address for interface",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mask",
        "description":"Interface netmask",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"broadcast",
        "description":"Broadcast address for the interface",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"point_to_point",
        "description":"PtP address for the interface",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of address. One of dhcp, manual, auto, other, unknown",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"friendly_name",
        "description":"The friendly display name of the interface.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"interface_details",
    "description":"Detailed information and stats of network interfaces.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/interface_details.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"interface",
        "description":"Interface name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mac",
        "description":"MAC of interface (optional)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Interface type (includes virtual)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mtu",
        "description":"Network MTU",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"metric",
        "description":"Metric based on the speed of the interface",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flags",
        "description":"Flags (netdevice) for the device",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipackets",
        "description":"Input packets",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"opackets",
        "description":"Output packets",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ibytes",
        "description":"Input bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"obytes",
        "description":"Output bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ierrors",
        "description":"Input errors",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"oerrors",
        "description":"Output errors",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"idrops",
        "description":"Input drops",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"odrops",
        "description":"Output drops",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"collisions",
        "description":"Packet Collisions detected",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_change",
        "description":"Time of last device modification (optional)",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"link_speed",
        "description":"Interface speed in Mb/s",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pci_slot",
        "description":"PCI slot number",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"friendly_name",
        "description":"The friendly display name of the interface.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Short description of the object a one-line string.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"manufacturer",
        "description":"Name of the network adapter's manufacturer.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"connection_id",
        "description":"Name of the network connection as it appears in the Network Connections Control Panel program.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"connection_status",
        "description":"State of the network adapter connection to the network.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"enabled",
        "description":"Indicates whether the adapter is enabled or not.",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"physical_adapter",
        "description":"Indicates whether the adapter is a physical or a logical adapter.",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"speed",
        "description":"Estimate of the current bandwidth in bits per second.",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"service",
        "description":"The name of the service the network adapter uses.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"dhcp_enabled",
        "description":"If TRUE, the dynamic host configuration protocol (DHCP) server automatically assigns an IP address to the computer system when establishing a network connection.",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"dhcp_lease_expires",
        "description":"Expiration date and time for a leased IP address that was assigned to the computer by the dynamic host configuration protocol (DHCP) server.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"dhcp_lease_obtained",
        "description":"Date and time the lease was obtained for the IP address assigned to the computer by the dynamic host configuration protocol (DHCP) server.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"dhcp_server",
        "description":"IP address of the dynamic host configuration protocol (DHCP) server.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"dns_domain",
        "description":"Organization name followed by a period and an extension that indicates the type of organization, such as 'microsoft.com'.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"dns_domain_suffix_search_order",
        "description":"Array of DNS domain suffixes to be appended to the end of host names during name resolution.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"dns_host_name",
        "description":"Host name used to identify the local computer for authentication by some utilities.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"dns_server_search_order",
        "description":"Array of server IP addresses to be used in querying for DNS servers.",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"interface_ipv6",
    "description":"IPv6 configuration and stats of network interfaces.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/interface_ipv6.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"interface",
        "description":"Interface name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hop_limit",
        "description":"Current Hop Limit",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"forwarding_enabled",
        "description":"Enable IP forwarding",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"redirect_accept",
        "description":"Accept ICMP redirect messages",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rtadv_accept",
        "description":"Accept ICMP Router Advertisement",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"iokit_devicetree",
    "description":"The IOKit registry matching the DeviceTree plane.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/iokit_devicetree.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"Device node name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"class",
        "description":"Best matching device class (most-specific category)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"id",
        "description":"IOKit internal registry ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"parent",
        "description":"Parent device registry ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device_path",
        "description":"Device tree path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"service",
        "description":"1 if the device conforms to IOService else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"busy_state",
        "description":"1 if the device is in a busy state else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"retain_count",
        "description":"The device reference count",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"depth",
        "description":"Device nested depth",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"iokit_registry",
    "description":"The full IOKit registry without selecting a plane.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/iokit_registry.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"Default name of the node",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"class",
        "description":"Best matching device class (most-specific category)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"id",
        "description":"IOKit internal registry ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"parent",
        "description":"Parent registry ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"busy_state",
        "description":"1 if the node is in a busy state else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"retain_count",
        "description":"The node reference count",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"depth",
        "description":"Node nested depth",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"iptables",
    "description":"Linux IP packet filtering and NAT tool.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/iptables.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"filter_name",
        "description":"Packet matching filter table name.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chain",
        "description":"Size of module content.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"policy",
        "description":"Policy that applies for this rule.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"target",
        "description":"Target that applies for this rule.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"protocol",
        "description":"Protocol number identification.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"src_port",
        "description":"Protocol source port(s).",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dst_port",
        "description":"Protocol destination port(s).",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"src_ip",
        "description":"Source IP address.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"src_mask",
        "description":"Source IP address mask.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"iniface",
        "description":"Input interface for the rule.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"iniface_mask",
        "description":"Input interface mask for the rule.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dst_ip",
        "description":"Destination IP address.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dst_mask",
        "description":"Destination IP address mask.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"outiface",
        "description":"Output interface for the rule.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"outiface_mask",
        "description":"Output interface mask for the rule.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"match",
        "description":"Matching rule that applies.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"packets",
        "description":"Number of matching packets for this rule.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bytes",
        "description":"Number of matching bytes for this rule.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"kernel_extensions",
    "description":"OS X's kernel extensions, both loaded and within the load search path.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/kernel_extensions.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"idx",
        "description":"Extension load tag or index",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"refs",
        "description":"Reference count",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Bytes of wired memory used by extension",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Extension label",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Extension version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"linked_against",
        "description":"Indexes of extensions this extension is linked against",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Optional path to extension bundle",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"kernel_info",
    "description":"Basic active kernel information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/kernel_info.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"version",
        "description":"Kernel version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"arguments",
        "description":"Kernel arguments",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Kernel path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device",
        "description":"Kernel device identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"kernel_modules",
    "description":"Linux kernel modules both loaded and within the load search path.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/kernel_modules.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Module name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of module content",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"used_by",
        "description":"Module reverse dependencies",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"Kernel module status",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"address",
        "description":"Kernel module address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"kernel_panics",
    "description":"System kernel panic logs.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/kernel_panics.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Location of log file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Formatted time of the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"registers",
        "description":"A space delimited line of register:value pairs",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"frame_backtrace",
        "description":"Backtrace of the crashed module",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"module_backtrace",
        "description":"Modules appearing in the crashed module's backtrace",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dependencies",
        "description":"Module dependencies existing in crashed module's backtrace",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Process name corresponding to crashed thread",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"os_version",
        "description":"Version of the operating system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"kernel_version",
        "description":"Version of the system kernel",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"system_model",
        "description":"Physical system model, for example 'MacBookPro12,1 (Mac-E43C1C25D4880AD6)'",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uptime",
        "description":"System uptime at kernel panic in nanoseconds",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_loaded",
        "description":"Last loaded module before panic",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_unloaded",
        "description":"Last unloaded module before panic",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"keychain_acls",
    "description":"Applications that have ACL entries in the keychain.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/keychain_acls.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"keychain_path",
        "description":"The path of the keychain",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"authorizations",
        "description":"A space delimited set of authorization attributes",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"The path of the authorized application",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"The description included with the ACL entry",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"label",
        "description":"An optional label tag that may be included with the keychain entry",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"keychain_items",
    "description":"Generic details about keychain items.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/keychain_items.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"label",
        "description":"Generic item name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Optional item description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"comment",
        "description":"Optional keychain comment",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"created",
        "description":"Data item was created",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"modified",
        "description":"Date of last modification",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Keychain item type (class)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to keychain containing item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"known_hosts",
    "description":"A line-delimited known_hosts table.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/known_hosts.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"The local user that owns the known_hosts file",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"parsed authorized keys line",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key_file",
        "description":"Path to known_hosts file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"kva_speculative_info",
    "description":"Display kernel virtual address and speculative execution information for the system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/kva_speculative_info.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"kva_shadow_enabled",
        "description":"Kernel Virtual Address shadowing is enabled.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"kva_shadow_user_global",
        "description":"User pages are marked as global.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"kva_shadow_pcid",
        "description":"Kernel VA PCID flushing optimization is enabled.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"kva_shadow_inv_pcid",
        "description":"Kernel VA INVPCID is enabled.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bp_mitigations",
        "description":"Branch Prediction mitigations are enabled.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bp_system_pol_disabled",
        "description":"Branch Predictions are disabled via system policy.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bp_microcode_disabled",
        "description":"Branch Predictions are disabled due to lack of microcode update.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_spec_ctrl_supported",
        "description":"SPEC_CTRL MSR supported by CPU Microcode.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ibrs_support_enabled",
        "description":"Windows uses IBRS.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"stibp_support_enabled",
        "description":"Windows uses STIBP.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_pred_cmd_supported",
        "description":"PRED_CMD MSR supported by CPU Microcode.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"last",
    "description":"System logins and logouts.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/last.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"username",
        "description":"Entry username",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"tty",
        "description":"Entry terminal",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Entry type, according to ut_type types (utmp.h)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Entry timestamp",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"host",
        "description":"Entry hostname",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"launchd",
    "description":"LaunchAgents and LaunchDaemons from default search paths.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/launchd.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"path",
        "description":"Path to daemon or agent plist",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"File name of plist (used by launchd)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"label",
        "description":"Daemon or agent service name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"program",
        "description":"Path to target program",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"run_at_load",
        "description":"Should the program run on launch load",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"keep_alive",
        "description":"Should the process be restarted if killed",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"on_demand",
        "description":"Deprecated key, replaced by keep_alive",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disabled",
        "description":"Skip loading this daemon or agent on boot",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"username",
        "description":"Run this daemon or agent as this username",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"groupname",
        "description":"Run this daemon or agent as this group",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"stdout_path",
        "description":"Pipe stdout to a target path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"stderr_path",
        "description":"Pipe stderr to a target path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"start_interval",
        "description":"Frequency to run in seconds",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"program_arguments",
        "description":"Command line arguments passed to program",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"watch_paths",
        "description":"Key that launches daemon or agent if path is modified",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"queue_directories",
        "description":"Similar to watch_paths but only with non-empty directories",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inetd_compatibility",
        "description":"Run this daemon or agent as it was launched from inetd",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"start_on_mount",
        "description":"Run daemon or agent every time a filesystem is mounted",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"root_directory",
        "description":"Key used to specify a directory to chroot to before launch",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"working_directory",
        "description":"Key used to specify a directory to chdir to before launch",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"process_type",
        "description":"Key describes the intended purpose of the job",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"launchd_overrides",
    "description":"Override keys, per user, for LaunchDaemons and Agents.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/launchd_overrides.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"label",
        "description":"Daemon or agent service name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"Name of the override key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Overridden value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"User ID applied to the override, 0 applies to all",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to daemon or agent plist",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"listening_ports",
    "description":"Processes with listening (bound) network sockets/ports.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/listening_ports.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port",
        "description":"Transport layer port",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"protocol",
        "description":"Transport protocol (TCP/UDP)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"family",
        "description":"Network protocol (IPv4, IPv6)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"address",
        "description":"Specific address for bind",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fd",
        "description":"Socket file descriptor number",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"socket",
        "description":"Socket handle or inode number",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path for UNIX domain sockets",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"net_namespace",
        "description":"The inode number of the network namespace",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"lldp_neighbors",
    "description":"LLDP neighbors of interfaces.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/lldpd/lldp_neighbors.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"interface",
        "description":"Interface name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rid",
        "description":"Neighbor chassis index",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_id_type",
        "description":"Neighbor chassis ID type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_id",
        "description":"Neighbor chassis ID value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_sysname",
        "description":"CPU brand string, contains vendor and model",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_sys_description",
        "description":"Max number of CPU physical cores",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_bridge_capability_available",
        "description":"Chassis bridge capability availability",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_bridge_capability_enabled",
        "description":"Is chassis bridge capability enabled.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_router_capability_available",
        "description":"Chassis router capability availability",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_router_capability_enabled",
        "description":"Chassis router capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_repeater_capability_available",
        "description":"Chassis repeater capability availability",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_repeater_capability_enabled",
        "description":"Chassis repeater capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_wlan_capability_available",
        "description":"Chassis wlan capability availability",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_wlan_capability_enabled",
        "description":"Chassis wlan capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_tel_capability_available",
        "description":"Chassis telephone capability availability",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_tel_capability_enabled",
        "description":"Chassis telephone capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_docsis_capability_available",
        "description":"Chassis DOCSIS capability availability",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_docsis_capability_enabled",
        "description":"Chassis DOCSIS capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_station_capability_available",
        "description":"Chassis station capability availability",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_station_capability_enabled",
        "description":"Chassis station capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_other_capability_available",
        "description":"Chassis other capability availability",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_other_capability_enabled",
        "description":"Chassis other capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chassis_mgmt_ips",
        "description":"Comma delimited list of chassis management IPS",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_id_type",
        "description":"Port ID type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_id",
        "description":"Port ID value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_description",
        "description":"Port description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_ttl",
        "description":"Age of neighbor port",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_mfs",
        "description":"Port max frame size",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_aggregation_id",
        "description":"Port aggregation ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_supported",
        "description":"Auto negotiation supported",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_enabled",
        "description":"Is auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_mau_type",
        "description":"MAU type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_10baset_hd_enabled",
        "description":"10Base-T HD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_10baset_fd_enabled",
        "description":"10Base-T FD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_100basetx_hd_enabled",
        "description":"100Base-TX HD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_100basetx_fd_enabled",
        "description":"100Base-TX FD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_100baset2_hd_enabled",
        "description":"100Base-T2 HD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_100baset2_fd_enabled",
        "description":"100Base-T2 FD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_100baset4_hd_enabled",
        "description":"100Base-T4 HD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_100baset4_fd_enabled",
        "description":"100Base-T4 FD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_1000basex_hd_enabled",
        "description":"1000Base-X HD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_1000basex_fd_enabled",
        "description":"1000Base-X FD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_1000baset_hd_enabled",
        "description":"1000Base-T HD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"port_autoneg_1000baset_fd_enabled",
        "description":"1000Base-T FD auto negotiation enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_device_type",
        "description":"Dot3 power device type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_mdi_supported",
        "description":"MDI power supported",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_mdi_enabled",
        "description":"Is MDI power enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_paircontrol_enabled",
        "description":"Is power pair control enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_pairs",
        "description":"Dot3 power pairs",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_class",
        "description":"Power class",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_8023at_enabled",
        "description":"Is 802.3at enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_8023at_power_type",
        "description":"802.3at power type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_8023at_power_source",
        "description":"802.3at power source",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_8023at_power_priority",
        "description":"802.3at power priority",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_8023at_power_allocated",
        "description":"802.3at power allocated",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_8023at_power_requested",
        "description":"802.3at power requested",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"med_device_type",
        "description":"Chassis MED type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"med_capability_capabilities",
        "description":"Is MED capabilities enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"med_capability_policy",
        "description":"Is MED policy capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"med_capability_location",
        "description":"Is MED location capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"med_capability_mdi_pse",
        "description":"Is MED MDI PSE capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"med_capability_mdi_pd",
        "description":"Is MED MDI PD capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"med_capability_inventory",
        "description":"Is MED inventory capability enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"med_policies",
        "description":"Comma delimited list of MED policies",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vlans",
        "description":"Comma delimited list of vlan ids",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pvid",
        "description":"Primary VLAN id",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ppvids_supported",
        "description":"Comma delimited list of supported PPVIDs",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ppvids_enabled",
        "description":"Comma delimited list of enabled PPVIDs",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pids",
        "description":"Comma delimited list of PIDs",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"load_average",
    "description":"Displays information about the system wide load averages.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/load_average.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"period",
        "description":"Period over which the average is calculated.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"average",
        "description":"Load average over the specified period.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"logged_in_users",
    "description":"Users with an active shell on the system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/logged_in_users.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"type",
        "description":"Login type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user",
        "description":"User login name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"tty",
        "description":"Device name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"host",
        "description":"Remote hostname",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time entry was made",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sid",
        "description":"The user's unique security identifier",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"registry_hive",
        "description":"HKEY_USERS registry hive",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"logical_drives",
    "description":"Details for logical drives on the system. A logical drive generally represents a single partition.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/logical_drives.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"device_id",
        "description":"The drive id, usually the drive name, e.g., 'C:'.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Deprecated (always 'Unknown').",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"The canonical description of the drive, e.g. 'Logical Fixed Disk', 'CD-ROM Disk'.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"free_space",
        "description":"The amount of free space, in bytes, of the drive (-1 on failure).",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"The total amount of space, in bytes, of the drive (-1 on failure).",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"file_system",
        "description":"The file system of the drive.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"boot_partition",
        "description":"True if Windows booted from this drive.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"logon_sessions",
    "description":"Windows Logon Session.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/logon_sessions.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"logon_id",
        "description":"A locally unique identifier (LUID) that identifies a logon session.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user",
        "description":"The account name of the security principal that owns the logon session.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"logon_domain",
        "description":"The name of the domain used to authenticate the owner of the logon session.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"authentication_package",
        "description":"The authentication package used to authenticate the owner of the logon session.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"logon_type",
        "description":"The logon method.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"session_id",
        "description":"The Terminal Services session identifier.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"logon_sid",
        "description":"The user's security identifier (SID).",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"logon_time",
        "description":"The time the session owner logged on.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"logon_server",
        "description":"The name of the server used to authenticate the owner of the logon session.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dns_domain_name",
        "description":"The DNS name for the owner of the logon session.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"upn",
        "description":"The user principal name (UPN) for the owner of the logon session.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"logon_script",
        "description":"The script used for logging on.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"profile_path",
        "description":"The home directory for the logon session.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"home_directory",
        "description":"The home directory for the logon session.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"home_directory_drive",
        "description":"The drive location of the home directory of the logon session.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"lxd_certificates",
    "description":"LXD certificates information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/lxd_certificates.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Name of the certificate",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of the certificate",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fingerprint",
        "description":"SHA256 hash of the certificate",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"certificate",
        "description":"Certificate content",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"lxd_cluster",
    "description":"LXD cluster information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/lxd_cluster.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"server_name",
        "description":"Name of the LXD server node",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"enabled",
        "description":"Whether clustering enabled (1) or not (0) on this node",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"member_config_entity",
        "description":"Type of configuration parameter for this node",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"member_config_name",
        "description":"Name of configuration parameter",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"member_config_key",
        "description":"Config key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"member_config_value",
        "description":"Config value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"member_config_description",
        "description":"Config description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"lxd_cluster_members",
    "description":"LXD cluster members information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/lxd_cluster_members.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"server_name",
        "description":"Name of the LXD server node",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"url",
        "description":"URL of the node",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"database",
        "description":"Whether the server is a database node (1) or not (0)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"Status of the node (Online/Offline)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"message",
        "description":"Message from the node (Online/Offline)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"lxd_images",
    "description":"LXD images information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/lxd_images.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"id",
        "description":"Image ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"architecture",
        "description":"Target architecture for the image",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"os",
        "description":"OS on which image is based",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"release",
        "description":"OS release version on which the image is based",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Image description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"aliases",
        "description":"Comma-separated list of image aliases",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"filename",
        "description":"Filename of the image file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of image in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"auto_update",
        "description":"Whether the image auto-updates (1) or not (0)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cached",
        "description":"Whether image is cached (1) or not (0)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"public",
        "description":"Whether image is public (1) or not (0)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"created_at",
        "description":"ISO time of image creation",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"expires_at",
        "description":"ISO time of image expiration",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uploaded_at",
        "description":"ISO time of image upload",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_used_at",
        "description":"ISO time for the most recent use of this image in terms of container spawn",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"update_source_server",
        "description":"Server for image update",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"update_source_protocol",
        "description":"Protocol used for image information update and image import from source server",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"update_source_certificate",
        "description":"Certificate for update source server",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"update_source_alias",
        "description":"Alias of image at update source server",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"lxd_instance_config",
    "description":"LXD instance configuration information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/lxd_instance_config.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Instance name",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"key",
        "description":"Configuration parameter name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Configuration parameter value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"lxd_instance_devices",
    "description":"LXD instance devices information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/lxd_instance_devices.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Instance name",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"device",
        "description":"Name of the device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device_type",
        "description":"Device type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"Device info param name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Device info param value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"lxd_instances",
    "description":"LXD instances information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/lxd_instances.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Instance name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"Instance state (running, stopped, etc.)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"stateful",
        "description":"Whether the instance is stateful(1) or not(0)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ephemeral",
        "description":"Whether the instance is ephemeral(1) or not(0)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"created_at",
        "description":"ISO time of creation",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"base_image",
        "description":"ID of image used to launch this instance",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"architecture",
        "description":"Instance architecture",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"os",
        "description":"The OS of this instance",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Instance description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Instance's process ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"processes",
        "description":"Number of processes running inside this instance",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"lxd_networks",
    "description":"LXD network information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/lxd_networks.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Name of the network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"managed",
        "description":"1 if network created by LXD, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv4_address",
        "description":"IPv4 address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipv6_address",
        "description":"IPv6 address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"used_by",
        "description":"URLs for containers using this network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bytes_received",
        "description":"Number of bytes received on this network",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bytes_sent",
        "description":"Number of bytes sent on this network",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"packets_received",
        "description":"Number of packets received on this network",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"packets_sent",
        "description":"Number of packets sent on this network",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hwaddr",
        "description":"Hardware address for this network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"Network status",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mtu",
        "description":"MTU size",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"lxd_storage_pools",
    "description":"LXD storage pool information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/lxd_storage_pools.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Name of the storage pool",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver",
        "description":"Storage driver",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source",
        "description":"Storage pool source",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of the storage pool",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"space_used",
        "description":"Storgae space used in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"space_total",
        "description":"Total available storage space in bytes for this storage pool",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inodes_used",
        "description":"Number of inodes used",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inodes_total",
        "description":"Total number of inodes available in this storage pool",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"magic",
    "description":"Magic number recognition library table.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/magic.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Absolute path to target file",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"magic_db_files",
        "description":"Colon(:) separated list of files where the magic db file can be found. By default one of the following is used: /usr/share/file/magic/magic, /usr/share/misc/magic or /usr/share/misc/magic.mgc",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"data",
        "description":"Magic number data from libmagic",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mime_type",
        "description":"MIME type data from libmagic",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mime_encoding",
        "description":"MIME encoding data from libmagic",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"managed_policies",
    "description":"The managed configuration policies from AD, MDM, MCX, etc.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/managed_policies.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"domain",
        "description":"System or manager-chosen domain key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uuid",
        "description":"Optional UUID assigned to policy set",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Policy key name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Policy value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"username",
        "description":"Policy applies only this user",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"manual",
        "description":"1 if policy was loaded manually, otherwise 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"md_devices",
    "description":"Software RAID array settings.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/md_devices.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"device_name",
        "description":"md device name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"Current state of the array",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"raid_level",
        "description":"Current raid level of the array",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"size of the array in blocks",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"chunk_size",
        "description":"chunk size in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"raid_disks",
        "description":"Number of configured RAID disks in array",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"nr_raid_disks",
        "description":"Number of partitions or disk devices to comprise the array",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"working_disks",
        "description":"Number of working disks in array",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"active_disks",
        "description":"Number of active disks in array",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"failed_disks",
        "description":"Number of failed disks in array",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"spare_disks",
        "description":"Number of idle disks in array",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"superblock_state",
        "description":"State of the superblock",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"superblock_version",
        "description":"Version of the superblock",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"superblock_update_time",
        "description":"Unix timestamp of last update",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bitmap_on_mem",
        "description":"Pages allocated in in-memory bitmap, if enabled",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bitmap_chunk_size",
        "description":"Bitmap chunk size",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bitmap_external_file",
        "description":"External referenced bitmap file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"recovery_progress",
        "description":"Progress of the recovery activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"recovery_finish",
        "description":"Estimated duration of recovery activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"recovery_speed",
        "description":"Speed of recovery activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"resync_progress",
        "description":"Progress of the resync activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"resync_finish",
        "description":"Estimated duration of resync activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"resync_speed",
        "description":"Speed of resync activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"reshape_progress",
        "description":"Progress of the reshape activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"reshape_finish",
        "description":"Estimated duration of reshape activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"reshape_speed",
        "description":"Speed of reshape activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"check_array_progress",
        "description":"Progress of the check array activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"check_array_finish",
        "description":"Estimated duration of the check array activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"check_array_speed",
        "description":"Speed of the check array activity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"unused_devices",
        "description":"Unused devices",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"other",
        "description":"Other information associated with array from /proc/mdstat",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"md_drives",
    "description":"Drive devices used for Software RAID.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/md_drives.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"md_device_name",
        "description":"md device name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"drive_name",
        "description":"Drive device name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"slot",
        "description":"Slot position of disk",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"State of the drive",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"md_personalities",
    "description":"Software RAID setting supported by the kernel.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/md_personalities.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Name of personality supported by kernel",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"mdfind",
    "description":"Run searches against the spotlight database.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/mdfind.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Path of the file returned from spotlight",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"query",
        "description":"The query that was run to find the file",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      }
    ]
  },
  {
    "name":"mdls",
    "description":"Query file metadata in the Spotlight database.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/mdls.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Path of the file",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"key",
        "description":"Name of the metadata key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Value stored in the metadata key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"valuetype",
        "description":"CoreFoundation type of data stored in value",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"memory_array_mapped_addresses",
    "description":"Data associated for address mapping of physical memory arrays.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/memory_array_mapped_addresses.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"handle",
        "description":"Handle, or instance number, associated with the structure",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_array_handle",
        "description":"Handle of the memory array associated with this structure",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"starting_address",
        "description":"Physical stating address, in kilobytes, of a range of memory mapped to physical memory array",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ending_address",
        "description":"Physical ending address of last kilobyte of a range of memory mapped to physical memory array",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"partition_width",
        "description":"Number of memory devices that form a single row of memory for the address partition of this structure",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"memory_arrays",
    "description":"Data associated with collection of memory devices that operate to form a memory address.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/memory_arrays.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"handle",
        "description":"Handle, or instance number, associated with the array",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"location",
        "description":"Physical location of the memory array",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"use",
        "description":"Function for which the array is used",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_error_correction",
        "description":"Primary hardware error correction or detection method supported",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"max_capacity",
        "description":"Maximum capacity of array in gigabytes",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_error_info_handle",
        "description":"Handle, or instance number, associated with any error that was detected for the array",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"number_memory_devices",
        "description":"Number of memory devices on array",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"memory_device_mapped_addresses",
    "description":"Data associated for address mapping of physical memory devices.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/memory_device_mapped_addresses.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"handle",
        "description":"Handle, or instance number, associated with the structure",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_device_handle",
        "description":"Handle of the memory device structure associated with this structure",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_array_mapped_address_handle",
        "description":"Handle of the memory array mapped address to which this device range is mapped to",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"starting_address",
        "description":"Physical stating address, in kilobytes, of a range of memory mapped to physical memory array",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ending_address",
        "description":"Physical ending address of last kilobyte of a range of memory mapped to physical memory array",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"partition_row_position",
        "description":"Identifies the position of the referenced memory device in a row of the address partition",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"interleave_position",
        "description":"The position of the device in a interleave, i.e. 0 indicates non-interleave, 1 indicates 1st interleave, 2 indicates 2nd interleave, etc.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"interleave_data_depth",
        "description":"The max number of consecutive rows from memory device that are accessed in a single interleave transfer; 0 indicates device is non-interleave",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"memory_devices",
    "description":"Physical memory device (type 17) information retrieved from SMBIOS.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/memory_devices.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"handle",
        "description":"Handle, or instance number, associated with the structure in SMBIOS",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"array_handle",
        "description":"The memory array that the device is attached to",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"form_factor",
        "description":"Implementation form factor for this memory device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"total_width",
        "description":"Total width, in bits, of this memory device, including any check or error-correction bits",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"data_width",
        "description":"Data width, in bits, of this memory device",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size of memory device in Megabyte",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"set",
        "description":"Identifies if memory device is one of a set of devices.  A value of 0 indicates no set affiliation.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device_locator",
        "description":"String number of the string that identifies the physically-labeled socket or board position where the memory device is located",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bank_locator",
        "description":"String number of the string that identifies the physically-labeled bank where the memory device is located",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_type",
        "description":"Type of memory used",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_type_details",
        "description":"Additional details for memory device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"max_speed",
        "description":"Max speed of memory device in megatransfers per second (MT/s)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"configured_clock_speed",
        "description":"Configured speed of memory device in megatransfers per second (MT/s)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"manufacturer",
        "description":"Manufacturer ID string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"serial_number",
        "description":"Serial number of memory device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"asset_tag",
        "description":"Manufacturer specific asset tag of memory device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"part_number",
        "description":"Manufacturer specific serial number of memory device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"min_voltage",
        "description":"Minimum operating voltage of device in millivolts",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"max_voltage",
        "description":"Maximum operating voltage of device in millivolts",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"configured_voltage",
        "description":"Configured operating voltage of device in millivolts",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"memory_error_info",
    "description":"Data associated with errors of a physical memory array.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/memory_error_info.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"handle",
        "description":"Handle, or instance number, associated with the structure",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"error_type",
        "description":"type of error associated with current error status for array or device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"error_granularity",
        "description":"Granularity to which the error can be resolved",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"error_operation",
        "description":"Memory access operation that caused the error",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vendor_syndrome",
        "description":"Vendor specific ECC syndrome or CRC data associated with the erroneous access",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_array_error_address",
        "description":"32 bit physical address of the error based on the addressing of the bus to which the memory array is connected",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device_error_address",
        "description":"32 bit physical address of the error relative to the start of the failing memory address, in bytes",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"error_resolution",
        "description":"Range, in bytes, within which this error can be determined, when an error address is given",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"memory_info",
    "description":"Main memory information in bytes.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/memory_info.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"memory_total",
        "description":"Total amount of physical RAM, in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"memory_free",
        "description":"The amount of physical RAM, in bytes, left unused by the system",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"buffers",
        "description":"The amount of physical RAM, in bytes, used for file buffers",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cached",
        "description":"The amount of physical RAM, in bytes, used as cache memory",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"swap_cached",
        "description":"The amount of swap, in bytes, used as cache memory",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"active",
        "description":"The total amount of buffer or page cache memory, in bytes, that is in active use",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inactive",
        "description":"The total amount of buffer or page cache memory, in bytes, that are free and available",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"swap_total",
        "description":"The total amount of swap available, in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"swap_free",
        "description":"The total amount of swap free, in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"memory_map",
    "description":"OS memory region map.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/memory_map.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Region name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"start",
        "description":"Start address of memory region",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"end",
        "description":"End address of memory region",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"mounts",
    "description":"System mounted devices and filesystems (not process specific).",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/mounts.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"device",
        "description":"Mounted device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device_alias",
        "description":"Mounted device alias",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Mounted device path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Mounted device type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"blocks_size",
        "description":"Block size in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"blocks",
        "description":"Mounted device used blocks",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"blocks_free",
        "description":"Mounted device free blocks",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"blocks_available",
        "description":"Mounted device available blocks",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inodes",
        "description":"Mounted device used inodes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inodes_free",
        "description":"Mounted device free inodes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flags",
        "description":"Mounted device flags",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"msr",
    "description":"Various pieces of data stored in the model specific register per processor. NOTE: the msr kernel module must be enabled, and osquery must be run as root.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/msr.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"processor_number",
        "description":"The processor number as reported in /proc/cpuinfo",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"turbo_disabled",
        "description":"Whether the turbo feature is disabled.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"turbo_ratio_limit",
        "description":"The turbo feature ratio limit.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"platform_info",
        "description":"Platform information.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"perf_ctl",
        "description":"Performance setting for the processor.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"perf_status",
        "description":"Performance status for the processor.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"feature_control",
        "description":"Bitfield controlling enabled features.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rapl_power_limit",
        "description":"Run Time Average Power Limiting power limit.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rapl_energy_status",
        "description":"Run Time Average Power Limiting energy status.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rapl_power_units",
        "description":"Run Time Average Power Limiting power units.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"nfs_shares",
    "description":"NFS shares exported by the host.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/nfs_shares.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"share",
        "description":"Filesystem path to the share",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"options",
        "description":"Options string set on the export share",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"readonly",
        "description":"1 if the share is exported readonly else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"npm_packages",
    "description":"Lists all npm packages in a directory or globally installed in a system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/npm_packages.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Package display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Package supplied version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Package supplied description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"author",
        "description":"Package author name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"license",
        "description":"License for package",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Module's package.json path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"directory",
        "description":"Node module's directory where this package is located",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid_with_namespace",
        "description":"Pids that contain a namespace",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"mount_namespace_id",
        "description":"Mount namespace id",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"ntdomains",
    "description":"Display basic NT domain information of a Windows machine.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/ntdomains.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"The label by which the object is known.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"client_site_name",
        "description":"The name of the site where the domain controller is configured.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dc_site_name",
        "description":"The name of the site where the domain controller is located.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dns_forest_name",
        "description":"The name of the root of the DNS tree.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"domain_controller_address",
        "description":"The IP Address of the discovered domain controller..",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"domain_controller_name",
        "description":"The name of the discovered domain controller.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"domain_name",
        "description":"The name of the domain.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"The current status of the domain object.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"ntfs_acl_permissions",
    "description":"Retrieve NTFS ACL permission information for files and directories.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/ntfs_acl_permissions.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Path to the file or directory.",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of access mode for the access control entry.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"principal",
        "description":"User or group to which the ACE applies.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"access",
        "description":"Specific permissions that indicate the rights described by the ACE.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inherited_from",
        "description":"The inheritance policy of the ACE.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"ntfs_journal_events",
    "description":"Track time/action changes to files specified in configuration data.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/ntfs_journal_events.table",
    "platforms":[
      "windows"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"action",
        "description":"Change action (Write, Delete, etc)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"category",
        "description":"The category that the event originated from",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"old_path",
        "description":"Old path (renames only)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"record_timestamp",
        "description":"Journal record timestamp",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"record_usn",
        "description":"The update sequence number that identifies the journal record",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"node_ref_number",
        "description":"The ordinal that associates a journal record with a filename",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"parent_ref_number",
        "description":"The ordinal that associates a journal record with a filename's parent directory",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"drive_letter",
        "description":"The drive letter identifying the source journal",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"file_attributes",
        "description":"File attributes",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"partial",
        "description":"Set to 1 if either path or old_path only contains the file or folder name",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of file event",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"nvram",
    "description":"Apple NVRAM variable listing.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/nvram.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Variable name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Data type (CFData, CFString, etc)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Raw variable data",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"oem_strings",
    "description":"OEM defined strings retrieved from SMBIOS.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/oem_strings.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"handle",
        "description":"Handle, or instance number, associated with the Type 11 structure",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"number",
        "description":"The string index of the structure",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"The value of the OEM string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"office_mru",
    "description":"View recently opened Office documents.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/office_mru.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"application",
        "description":"Associated Office application",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Office application version number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"File path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_opened_time",
        "description":"Most recent opened time file was opened",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sid",
        "description":"User SID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"opera_extensions",
    "description":"Opera browser extensions.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/opera_extensions.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"The local user that owns the extension",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Extension display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"identifier",
        "description":"Extension identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Extension-supplied version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Extension-optional description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"locale",
        "description":"Default locale supported by extension",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"update_url",
        "description":"Extension-supplied update URI",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"author",
        "description":"Optional extension author",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"persistent",
        "description":"1 If extension is persistent across all tabs else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to extension folder",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"os_version",
    "description":"A single row containing the operating system name and version.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/os_version.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Distribution or product name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Pretty, suitable for presentation, OS version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"major",
        "description":"Major release version",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"minor",
        "description":"Minor release version",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"patch",
        "description":"Optional patch release",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"build",
        "description":"Optional build-specific or variant string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"platform",
        "description":"OS Platform or ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"platform_like",
        "description":"Closely related platforms",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"codename",
        "description":"OS version codename",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"arch",
        "description":"OS Architecture",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"install_date",
        "description":"The install date of the OS.",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"pid_with_namespace",
        "description":"Pids that contain a namespace",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"mount_namespace_id",
        "description":"Mount namespace id",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"osquery_events",
    "description":"Information about the event publishers and subscribers.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/utility/osquery_events.table",
    "platforms":[
      "darwin",
      "linux",
      "freebsd",
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Event publisher or subscriber name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"publisher",
        "description":"Name of the associated publisher",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Either publisher or subscriber",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subscriptions",
        "description":"Number of subscriptions the publisher received or subscriber used",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"events",
        "description":"Number of events emitted or received since osquery started",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"refreshes",
        "description":"Publisher only: number of runloop restarts",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"active",
        "description":"1 if the publisher or subscriber is active else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"osquery_extensions",
    "description":"List of active osquery extensions.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/utility/osquery_extensions.table",
    "platforms":[
      "darwin",
      "linux",
      "freebsd",
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uuid",
        "description":"The transient ID assigned for communication",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Extension's name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Extension's version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sdk_version",
        "description":"osquery SDK version used to build the extension",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path of the extenion's domain socket or library path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"SDK extension type: extension or module",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"osquery_flags",
    "description":"Configurable flags that modify osquery's behavior.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/utility/osquery_flags.table",
    "platforms":[
      "darwin",
      "linux",
      "freebsd",
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Flag name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Flag type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Flag description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"default_value",
        "description":"Flag default value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Flag value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"shell_only",
        "description":"Is the flag shell only?",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"osquery_info",
    "description":"Top level information about the running version of osquery.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/utility/osquery_info.table",
    "platforms":[
      "darwin",
      "linux",
      "freebsd",
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"pid",
        "description":"Process (or thread/handle) ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uuid",
        "description":"Unique ID provided by the system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"instance_id",
        "description":"Unique, long-lived ID per instance of osquery",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"osquery toolkit version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"config_hash",
        "description":"Hash of the working configuration state",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"config_valid",
        "description":"1 if the config was loaded and considered valid, else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"extensions",
        "description":"osquery extensions status",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"build_platform",
        "description":"osquery toolkit build platform",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"build_distro",
        "description":"osquery toolkit platform distribution name (os version)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"start_time",
        "description":"UNIX time in seconds when the process started",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"watcher",
        "description":"Process (or thread/handle) ID of optional watcher process",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"platform_mask",
        "description":"The osquery platform bitmask",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"osquery_packs",
    "description":"Information about the current query packs that are loaded in osquery.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/utility/osquery_packs.table",
    "platforms":[
      "darwin",
      "linux",
      "freebsd",
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"The given name for this query pack",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"platform",
        "description":"Platforms this query is supported on",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Minimum osquery version that this query will run on",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"shard",
        "description":"Shard restriction limit, 1-100, 0 meaning no restriction",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"discovery_cache_hits",
        "description":"The number of times that the discovery query used cached values since the last time the config was reloaded",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"discovery_executions",
        "description":"The number of times that the discovery queries have been executed since the last time the config was reloaded",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"active",
        "description":"Whether this pack is active (the version, platform and discovery queries match) yes=1, no=0.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"osquery_registry",
    "description":"List the osquery registry plugins.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/utility/osquery_registry.table",
    "platforms":[
      "darwin",
      "linux",
      "freebsd",
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"registry",
        "description":"Name of the osquery registry",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Name of the plugin item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"owner_uuid",
        "description":"Extension route UUID (0 for core)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"internal",
        "description":"1 If the plugin is internal else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"active",
        "description":"1 If this plugin is active else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"osquery_schedule",
    "description":"Information about the current queries that are scheduled in osquery.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/utility/osquery_schedule.table",
    "platforms":[
      "darwin",
      "linux",
      "freebsd",
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"The given name for this query",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"query",
        "description":"The exact query to run",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"interval",
        "description":"The interval in seconds to run this query, not an exact interval",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"executions",
        "description":"Number of times the query was executed",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_executed",
        "description":"UNIX time stamp in seconds of the last completed execution",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"denylisted",
        "description":"1 if the query is denylisted else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"output_size",
        "description":"Total number of bytes generated by the query",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"wall_time",
        "description":"Total wall time spent executing",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user_time",
        "description":"Total user time spent executing",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"system_time",
        "description":"Total system time spent executing",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"average_memory",
        "description":"Average private memory left after executing",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"package_bom",
    "description":"OS X package bill of materials (BOM) file list.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/package_bom.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"filepath",
        "description":"Package file or directory",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"Expected user of file or directory",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"Expected group of file or directory",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mode",
        "description":"Expected permissions",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Expected file size",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"modified_time",
        "description":"Timestamp the file was installed",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path of package bom",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      }
    ]
  },
  {
    "name":"package_install_history",
    "description":"OS X package install history.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/package_install_history.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"package_id",
        "description":"Label packageIdentifiers",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Label date as UNIX timestamp",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Package display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Package display version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source",
        "description":"Install source: usually the installer process name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"content_type",
        "description":"Package content_type (optional)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"package_receipts",
    "description":"OS X package receipt details.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/package_receipts.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"package_id",
        "description":"Package domain identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"package_filename",
        "description":"Filename of original .pkg file",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Installed package version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"location",
        "description":"Optional relative install path on volume",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"install_time",
        "description":"Timestamp of install time",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"installer_name",
        "description":"Name of installer process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path of receipt plist",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"patches",
    "description":"Lists all the patches applied. Note: This does not include patches applied via MSI or downloaded from Windows Update (e.g. Service Packs).",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/patches.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"csname",
        "description":"The name of the host the patch is installed on.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hotfix_id",
        "description":"The KB ID of the patch.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"caption",
        "description":"Short description of the patch.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Fuller description of the patch.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fix_comments",
        "description":"Additional comments about the patch.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"installed_by",
        "description":"The system context in which the patch as installed.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"install_date",
        "description":"Indicates when the patch was installed. Lack of a value does not indicate that the patch was not installed.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"installed_on",
        "description":"The date when the patch was installed.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"pci_devices",
    "description":"PCI devices active on the host system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/pci_devices.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"pci_slot",
        "description":"PCI Device used slot",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pci_class",
        "description":"PCI Device class",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver",
        "description":"PCI Device used driver",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vendor",
        "description":"PCI Device vendor",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vendor_id",
        "description":"Hex encoded PCI Device vendor identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model",
        "description":"PCI Device model",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model_id",
        "description":"Hex encoded PCI Device model identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pci_class_id",
        "description":"PCI Device class ID in hex format",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"pci_subclass_id",
        "description":"PCI Device  subclass in hex format",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"pci_subclass",
        "description":"PCI Device subclass",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"subsystem_vendor_id",
        "description":"Vendor ID of PCI device subsystem",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"subsystem_vendor",
        "description":"Vendor of PCI device subsystem",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"subsystem_model_id",
        "description":"Model ID of PCI device subsystem",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"subsystem_model",
        "description":"Device description of PCI device subsystem",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"physical_disk_performance",
    "description":"Provides provides raw data from performance counters that monitor hard or fixed disk drives on the system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/physical_disk_performance.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Name of the physical disk",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"avg_disk_bytes_per_read",
        "description":"Average number of bytes transferred from the disk during read operations",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"avg_disk_bytes_per_write",
        "description":"Average number of bytes transferred to the disk during write operations",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"avg_disk_read_queue_length",
        "description":"Average number of read requests that were queued for the selected disk during the sample interval",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"avg_disk_write_queue_length",
        "description":"Average number of write requests that were queued for the selected disk during the sample interval",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"avg_disk_sec_per_read",
        "description":"Average time, in seconds, of a read operation of data from the disk",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"avg_disk_sec_per_write",
        "description":"Average time, in seconds, of a write operation of data to the disk",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"current_disk_queue_length",
        "description":"Number of requests outstanding on the disk at the time the performance data is collected",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"percent_disk_read_time",
        "description":"Percentage of elapsed time that the selected disk drive is busy servicing read requests",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"percent_disk_write_time",
        "description":"Percentage of elapsed time that the selected disk drive is busy servicing write requests",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"percent_disk_time",
        "description":"Percentage of elapsed time that the selected disk drive is busy servicing read or write requests",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"percent_idle_time",
        "description":"Percentage of time during the sample interval that the disk was idle",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"pipes",
    "description":"Named and Anonymous pipes.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/pipes.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"pid",
        "description":"Process ID of the process to which the pipe belongs",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Name of the pipe",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"instances",
        "description":"Number of instances of the named pipe",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"max_instances",
        "description":"The maximum number of instances creatable for this pipe",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flags",
        "description":"The flags indicating whether this pipe connection is a server or client end, and if the pipe for sending messages or bytes",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"pkg_packages",
    "description":"pkgng packages that are currently installed on the host system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/freebsd/pkg_packages.table",
    "platforms":[
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"Package name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Package version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flatsize",
        "description":"Package size in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"arch",
        "description":"Architecture(s) supported",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"platform_info",
    "description":"Information about EFI/UEFI/ROM and platform/boot.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/platform_info.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"vendor",
        "description":"Platform code vendor",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Platform code version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"date",
        "description":"Self-reported platform code update date",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"revision",
        "description":"BIOS major and minor revision",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"address",
        "description":"Relative address of firmware mapping",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size in bytes of firmware",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"volume_size",
        "description":"(Optional) size of firmware volume",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"extra",
        "description":"Platform-specific additional information",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"plist",
    "description":"Read and parse a plist file.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/plist.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"key",
        "description":"Preference top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subkey",
        "description":"Intermediate key path, includes lists/dicts",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"String value of most CF types",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"(required) read preferences from a plist",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      }
    ]
  },
  {
    "name":"portage_keywords",
    "description":"A summary about portage configurations like keywords, mask and unmask.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/portage_keywords.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"package",
        "description":"Package name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"The version which are affected by the use flags, empty means all",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"keyword",
        "description":"The keyword applied to the package",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mask",
        "description":"If the package is masked",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"unmask",
        "description":"If the package is unmasked",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"portage_packages",
    "description":"List of currently installed packages.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/portage_packages.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"package",
        "description":"Package name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"The version which are affected by the use flags, empty means all",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"slot",
        "description":"The slot used by package",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"build_time",
        "description":"Unix time when package was built",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"repository",
        "description":"From which repository the ebuild was used",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eapi",
        "description":"The eapi for the ebuild",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"The size of the package",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"world",
        "description":"If package is in the world file",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"portage_use",
    "description":"List of enabled portage USE values for specific package.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/portage_use.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"package",
        "description":"Package name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"The version of the installed package",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"use",
        "description":"USE flag which has been enabled for package",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"power_sensors",
    "description":"Machine power (currents, voltages, wattages, etc) sensors.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/power_sensors.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"key",
        "description":"The SMC key on OS X",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"category",
        "description":"The sensor category: currents, voltage, wattage",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Name of power source",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Power in Watts",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"powershell_events",
    "description":"Powershell script blocks reconstructed to their full script content, this table requires script block logging to be enabled.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/powershell_events.table",
    "platforms":[
      "windows"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"time",
        "description":"Timestamp the event was received by the osquery event publisher",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"datetime",
        "description":"System time at which the Powershell script event occurred",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"script_block_id",
        "description":"The unique GUID of the powershell script to which this block belongs",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"script_block_count",
        "description":"The total number of script blocks for this script",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"script_text",
        "description":"The text content of the Powershell script",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"script_name",
        "description":"The name of the Powershell script",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"script_path",
        "description":"The path for the Powershell script",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cosine_similarity",
        "description":"How similar the Powershell script is to a provided 'normal' character frequency",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"preferences",
    "description":"OS X defaults and managed preferences.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/preferences.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"domain",
        "description":"Application ID usually in com.name.product format",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"Preference top-level key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subkey",
        "description":"Intemediate key path, includes lists/dicts",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"String value of most CF types",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"forced",
        "description":"1 if the value is forced/managed, else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"username",
        "description":"(optional) read preferences for a specific user",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"host",
        "description":"'current' or 'any' host, where 'current' takes precedence",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"process_envs",
    "description":"A key/value table of environment variables for each process.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/process_envs.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"Environment variable name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Environment variable value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"process_events",
    "description":"Track time/action process executions.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/process_events.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path of executed file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mode",
        "description":"File mode permissions",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cmdline",
        "description":"Command line arguments (argv)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cmdline_size",
        "description":"Actual size (bytes) of command line arguments",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"env",
        "description":"Environment variables delimited by spaces",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"env_count",
        "description":"Number of environment variables",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"env_size",
        "description":"Actual size (bytes) of environment list",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"cwd",
        "description":"The process current working directory",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"auid",
        "description":"Audit User ID at process start",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"User ID at process start",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"euid",
        "description":"Effective user ID at process start",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"Group ID at process start",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"egid",
        "description":"Effective group ID at process start",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"owner_uid",
        "description":"File owner user ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"owner_gid",
        "description":"File owner group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"atime",
        "description":"File last access in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mtime",
        "description":"File modification in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ctime",
        "description":"File last metadata change in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"btime",
        "description":"File creation in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"overflows",
        "description":"List of structures that overflowed",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"parent",
        "description":"Process parent's PID, or -1 if cannot be determined.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of execution in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uptime",
        "description":"Time of execution in system uptime",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"OpenBSM Attribute: Status of the process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fsuid",
        "description":"Filesystem user ID at process start",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"suid",
        "description":"Saved user ID at process start",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"fsgid",
        "description":"Filesystem group ID at process start",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"sgid",
        "description":"Saved group ID at process start",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"syscall",
        "description":"Syscall name: fork, vfork, clone, execve, execveat",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"process_file_events",
    "description":"A File Integrity Monitor implementation using the audit service.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/process_file_events.table",
    "platforms":[
      "linux"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"operation",
        "description":"Operation type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ppid",
        "description":"Parent process ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of execution in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"executable",
        "description":"The executable path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"partial",
        "description":"True if this is a partial event (i.e.: this process existed before we started osquery)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cwd",
        "description":"The current working directory of the process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"The path associated with the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dest_path",
        "description":"The canonical path associated with the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"The uid of the process performing the action",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"The gid of the process performing the action",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"auid",
        "description":"Audit user ID of the process using the file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"euid",
        "description":"Effective user ID of the process using the file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"egid",
        "description":"Effective group ID of the process using the file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fsuid",
        "description":"Filesystem user ID of the process using the file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fsgid",
        "description":"Filesystem group ID of the process using the file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"suid",
        "description":"Saved user ID of the process using the file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sgid",
        "description":"Saved group ID of the process using the file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uptime",
        "description":"Time of execution in system uptime",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"process_memory_map",
    "description":"Process memory mapped files and pseudo device/regions.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/process_memory_map.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"start",
        "description":"Virtual start address (hex)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"end",
        "description":"Virtual end address (hex)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"permissions",
        "description":"r=read, w=write, x=execute, p=private (cow)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"offset",
        "description":"Offset into mapped path",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device",
        "description":"MA:MI Major/minor device ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inode",
        "description":"Mapped path inode, 0 means uninitialized (BSS)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to mapped file or mapped type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pseudo",
        "description":"1 If path is a pseudo path, else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"process_namespaces",
    "description":"Linux namespaces for processes running on the host system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/process_namespaces.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cgroup_namespace",
        "description":"cgroup namespace inode",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ipc_namespace",
        "description":"ipc namespace inode",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mnt_namespace",
        "description":"mnt namespace inode",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"net_namespace",
        "description":"net namespace inode",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid_namespace",
        "description":"pid namespace inode",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user_namespace",
        "description":"user namespace inode",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uts_namespace",
        "description":"uts namespace inode",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"process_open_files",
    "description":"File descriptors for each process.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/process_open_files.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fd",
        "description":"Process-specific file descriptor number",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Filesystem path of descriptor",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"process_open_pipes",
    "description":"Pipes and partner processes for each process.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/process_open_pipes.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"pid",
        "description":"Process ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fd",
        "description":"File descriptor",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mode",
        "description":"Pipe open mode (r/w)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inode",
        "description":"Pipe inode number",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Pipe Type: named vs unnamed/anonymous",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"partner_pid",
        "description":"Process ID of partner process sharing a particular pipe",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"partner_fd",
        "description":"File descriptor of shared pipe at partner's end",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"partner_mode",
        "description":"Mode of shared pipe at partner's end",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"process_open_sockets",
    "description":"Processes which have open network sockets on the system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/process_open_sockets.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fd",
        "description":"Socket file descriptor number",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"socket",
        "description":"Socket handle or inode number",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"family",
        "description":"Network protocol (IPv4, IPv6)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"protocol",
        "description":"Transport protocol (TCP/UDP)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"local_address",
        "description":"Socket local address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"remote_address",
        "description":"Socket remote address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"local_port",
        "description":"Socket local port",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"remote_port",
        "description":"Socket remote port",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"For UNIX sockets (family=AF_UNIX), the domain path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"TCP socket state",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"net_namespace",
        "description":"The inode number of the network namespace",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"processes",
    "description":"All running processes on the host system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/processes.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"The process path or shorthand argv[0]",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to executed binary",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cmdline",
        "description":"Complete argv",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"Process state",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cwd",
        "description":"Process current working directory",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"root",
        "description":"Process virtual root directory",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid",
        "description":"Unsigned user ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"Unsigned group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"euid",
        "description":"Unsigned effective user ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"egid",
        "description":"Unsigned effective group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"suid",
        "description":"Unsigned saved user ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sgid",
        "description":"Unsigned saved group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"on_disk",
        "description":"The process path exists yes=1, no=0, unknown=-1",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"wired_size",
        "description":"Bytes of unpagable memory used by process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"resident_size",
        "description":"Bytes of private memory used by process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"total_size",
        "description":"Total virtual memory size",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user_time",
        "description":"CPU time in milliseconds spent in user space",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"system_time",
        "description":"CPU time in milliseconds spent in kernel space",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disk_bytes_read",
        "description":"Bytes read from disk",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disk_bytes_written",
        "description":"Bytes written to disk",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"start_time",
        "description":"Process start time in seconds since Epoch, in case of error -1",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"parent",
        "description":"Process parent's PID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pgroup",
        "description":"Process group",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"threads",
        "description":"Number of threads used by process",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"nice",
        "description":"Process nice level (-20 to 20, default 0)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"is_elevated_token",
        "description":"Process uses elevated token yes=1, no=0",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"elapsed_time",
        "description":"Elapsed time in seconds this process has been running.",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"handle_count",
        "description":"Total number of handles that the process has open. This number is the sum of the handles currently opened by each thread in the process.",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"percent_processor_time",
        "description":"Returns elapsed time that all of the threads of this process used the processor to execute instructions in 100 nanoseconds ticks.",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"upid",
        "description":"A 64bit pid that is never reused. Returns -1 if we couldn't gather them from the system.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uppid",
        "description":"The 64bit parent pid that is never reused. Returns -1 if we couldn't gather them from the system.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_type",
        "description":"Indicates the specific processor designed for installation.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_subtype",
        "description":"Indicates the specific processor on which an entry may be used.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"programs",
    "description":"Represents products as they are installed by Windows Installer. A product generally correlates to one installation package on Windows. Some fields may be blank as Windows installation details are left to the discretion of the product author.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/programs.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Commonly used product name.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Product version information.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"install_location",
        "description":"The installation location directory of the product.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"install_source",
        "description":"The installation source of the product.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"language",
        "description":"The language of the product.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"publisher",
        "description":"Name of the product supplier.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uninstall_string",
        "description":"Path and filename of the uninstaller.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"install_date",
        "description":"Date that this product was installed on the system. ",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"identifying_number",
        "description":"Product identification such as a serial number on software, or a die number on a hardware chip.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"prometheus_metrics",
    "description":"Retrieve metrics from a Prometheus server.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/prometheus_metrics.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"target_name",
        "description":"Address of prometheus target",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"metric_name",
        "description":"Name of collected Prometheus metric",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"metric_value",
        "description":"Value of collected Prometheus metric",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"timestamp_ms",
        "description":"Unix timestamp of collected data in MS",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"python_packages",
    "description":"Python packages installed in a system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/python_packages.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Package display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Package-supplied version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"summary",
        "description":"Package-supplied summary",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"author",
        "description":"Optional package author",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"license",
        "description":"License under which package is launched",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path at which this module resides",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"directory",
        "description":"Directory where Python modules are located",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"quicklook_cache",
    "description":"Files and thumbnails within OS X's Quicklook Cache.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/quicklook_cache.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"path",
        "description":"Path of file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rowid",
        "description":"Quicklook file rowid key",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fs_id",
        "description":"Quicklook file fs_id key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"volume_id",
        "description":"Parsed volume ID from fs_id",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inode",
        "description":"Parsed file ID (inode) from fs_id",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mtime",
        "description":"Parsed version date field",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Parsed version size field",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"label",
        "description":"Parsed version 'gen' field",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_hit_date",
        "description":"Apple date format for last thumbnail cache hit",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hit_count",
        "description":"Number of cache hits on thumbnail",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"icon_mode",
        "description":"Thumbnail icon mode",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cache_path",
        "description":"Path to cache data",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"registry",
    "description":"All of the Windows registry hives.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/registry.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"key",
        "description":"Name of the key to search for",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Full path to the value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Name of the registry value entry",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of the registry value, or 'subkey' if item is a subkey",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"data",
        "description":"Data content of registry value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mtime",
        "description":"timestamp of the most recent registry write",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"routes",
    "description":"The active route table for the host system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/routes.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"destination",
        "description":"Destination IP address",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"netmask",
        "description":"Netmask length",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gateway",
        "description":"Route gateway",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source",
        "description":"Route source",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flags",
        "description":"Flags to describe route",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"interface",
        "description":"Route local interface",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mtu",
        "description":"Maximum Transmission Unit for the route",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"metric",
        "description":"Cost of route. Lowest is preferred",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of route",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hopcount",
        "description":"Max hops expected",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"rpm_package_files",
    "description":"RPM packages that are currently installed on the host system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/rpm_package_files.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"package",
        "description":"RPM package name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"File path within the package",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"username",
        "description":"File default username from info DB",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"groupname",
        "description":"File default groupname from info DB",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mode",
        "description":"File permissions mode from info DB",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Expected file size in bytes from RPM info DB",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha256",
        "description":"SHA256 file digest from RPM info DB",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"rpm_packages",
    "description":"RPM packages that are currently installed on the host system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/rpm_packages.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"RPM package name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Package version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"release",
        "description":"Package release",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source",
        "description":"Source RPM package name (optional)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Package size in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sha1",
        "description":"SHA1 hash of the package contents",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"arch",
        "description":"Architecture(s) supported",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"epoch",
        "description":"Package epoch value",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"install_time",
        "description":"When the package was installed",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vendor",
        "description":"Package vendor",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"package_group",
        "description":"Package group",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid_with_namespace",
        "description":"Pids that contain a namespace",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"mount_namespace_id",
        "description":"Mount namespace id",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"running_apps",
    "description":"macOS applications currently running on the host system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/running_apps.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"pid",
        "description":"The pid of the application",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bundle_identifier",
        "description":"The bundle identifier of the application",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"is_active",
        "description":"1 if the application is in focus, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"safari_extensions",
    "description":"Safari browser extension details for all users.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/safari_extensions.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"The local user that owns the extension",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Extension display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"identifier",
        "description":"Extension identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"Extension long version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sdk",
        "description":"Bundle SDK used to compile extension",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"update_url",
        "description":"Extension-supplied update URI",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"author",
        "description":"Optional extension author",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"developer_id",
        "description":"Optional developer identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Optional extension description text",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to extension XAR bundle",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"sandboxes",
    "description":"OS X application sandboxes container details.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/sandboxes.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"label",
        "description":"UTI-format bundle or label ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user",
        "description":"Sandbox owner",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"enabled",
        "description":"Application sandboxings enabled on container",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"build_id",
        "description":"Sandbox-specific identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bundle_path",
        "description":"Application bundle used by the sandbox",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to sandbox container directory",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"scheduled_tasks",
    "description":"Lists all of the tasks in the Windows task scheduler.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/scheduled_tasks.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Name of the scheduled task",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"action",
        "description":"Actions executed by the scheduled task",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to the executable to be run",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"enabled",
        "description":"Whether or not the scheduled task is enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"State of the scheduled task",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hidden",
        "description":"Whether or not the task is visible in the UI",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_run_time",
        "description":"Timestamp the task last ran",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"next_run_time",
        "description":"Timestamp the task is scheduled to run next",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_run_message",
        "description":"Exit status message of the last task run",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_run_code",
        "description":"Exit status code of the last task run",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"screenlock",
    "description":"macOS screenlock status for the current logged in user context.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/screenlock.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"enabled",
        "description":"1 If a password is required after sleep or the screensaver begins; else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"grace_period",
        "description":"The amount of time in seconds the screen must be asleep or the screensaver on before a password is required on-wake. 0 = immediately; -1 = no password is required on-wake",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"selinux_events",
    "description":"Track SELinux events.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/selinux_events.table",
    "platforms":[
      "linux"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"type",
        "description":"Event type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"message",
        "description":"Message",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of execution in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uptime",
        "description":"Time of execution in system uptime",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"selinux_settings",
    "description":"Track active SELinux settings.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/selinux_settings.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"scope",
        "description":"Where the key is located inside the SELinuxFS mount point.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"key",
        "description":"Key or class name.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Active value.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"services",
    "description":"Lists all installed Windows services and their relevant data.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/services.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Service name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"service_type",
        "description":"Service Type: OWN_PROCESS, SHARE_PROCESS and maybe Interactive (can interact with the desktop)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"display_name",
        "description":"Service Display name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"Service Current status: STOPPED, START_PENDING, STOP_PENDING, RUNNING, CONTINUE_PENDING, PAUSE_PENDING, PAUSED",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"the Process ID of the service",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"start_type",
        "description":"Service start type: BOOT_START, SYSTEM_START, AUTO_START, DEMAND_START, DISABLED",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"win32_exit_code",
        "description":"The error code that the service uses to report an error that occurs when it is starting or stopping",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"service_exit_code",
        "description":"The service-specific error code that the service returns when an error occurs while the service is starting or stopping",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to Service Executable",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"module_path",
        "description":"Path to ServiceDll",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Service Description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user_account",
        "description":"The name of the account that the service process will be logged on as when it runs. This name can be of the form Domain\\UserName. If the account belongs to the built-in domain, the name can be of the form .\\UserName.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"shadow",
    "description":"Local system users encrypted passwords and related information. Please note, that you usually need superuser rights to access `/etc/shadow`.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/shadow.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"password_status",
        "description":"Password status",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hash_alg",
        "description":"Password hashing algorithm",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_change",
        "description":"Date of last password change (starting from UNIX epoch date)",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"min",
        "description":"Minimal number of days between password changes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"max",
        "description":"Maximum number of days between password changes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"warning",
        "description":"Number of days before password expires to warn user about it",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inactive",
        "description":"Number of days after password expires until account is blocked",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"expire",
        "description":"Number of days since UNIX epoch date until account is disabled",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"flag",
        "description":"Reserved",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"username",
        "description":"Username",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"shared_folders",
    "description":"Folders available to others via SMB or AFP.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/shared_folders.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"The shared name of the folder as it appears to other users",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Absolute path of shared folder on the local system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"shared_memory",
    "description":"OS shared memory regions.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/shared_memory.table",
    "platforms":[
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"shmid",
        "description":"Shared memory segment ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"owner_uid",
        "description":"User ID of owning process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"creator_uid",
        "description":"User ID of creator process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process ID to last use the segment",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"creator_pid",
        "description":"Process ID that created the segment",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"atime",
        "description":"Attached time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"dtime",
        "description":"Detached time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ctime",
        "description":"Changed time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"permissions",
        "description":"Memory segment permissions",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Size in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"attached",
        "description":"Number of attached processes",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"Destination/attach status",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"locked",
        "description":"1 if segment is locked else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"shared_resources",
    "description":"Displays shared resources on a computer system running Windows. This may be a disk drive, printer, interprocess communication, or other sharable device.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/shared_resources.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"description",
        "description":"A textual description of the object",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"install_date",
        "description":"Indicates when the object was installed. Lack of a value does not indicate that the object is not installed.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"String that indicates the current status of the object.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"allow_maximum",
        "description":"Number of concurrent users for this resource has been limited. If True, the value in the MaximumAllowed property is ignored.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"maximum_allowed",
        "description":"Limit on the maximum number of users allowed to use this resource concurrently. The value is only valid if the AllowMaximum property is set to FALSE.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Alias given to a path set up as a share on a computer system running Windows.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Local path of the Windows share.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of resource being shared. Types include: disk drives, print queues, interprocess communications (IPC), and general devices.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"sharing_preferences",
    "description":"OS X Sharing preferences.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/sharing_preferences.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"screen_sharing",
        "description":"1 If screen sharing is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"file_sharing",
        "description":"1 If file sharing is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"printer_sharing",
        "description":"1 If printer sharing is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"remote_login",
        "description":"1 If remote login is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"remote_management",
        "description":"1 If remote management is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"remote_apple_events",
        "description":"1 If remote apple events are enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"internet_sharing",
        "description":"1 If internet sharing is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bluetooth_sharing",
        "description":"1 If bluetooth sharing is enabled for any user else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disc_sharing",
        "description":"1 If CD or DVD sharing is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"content_caching",
        "description":"1 If content caching is enabled else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"shell_history",
    "description":"A line-delimited (command) table of per-user .*_history data.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/shell_history.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"Shell history owner",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Entry timestamp. It could be absent, default value is 0.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"command",
        "description":"Unparsed date/line/command history line",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"history_file",
        "description":"Path to the .*_history for this user",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"shimcache",
    "description":"Application Compatibility Cache, contains artifacts of execution.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/shimcache.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"entry",
        "description":"Execution order.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"This is the path to the executed file.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"modified_time",
        "description":"File Modified time.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"execution_flag",
        "description":"Boolean Execution flag, 1 for execution, 0 for no execution, -1 for missing (this flag does not exist on Windows 10 and higher).",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"signature",
    "description":"File (executable, bundle, installer, disk) code signing status.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/signature.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Must provide a path or directory",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"hash_resources",
        "description":"Set to 1 to also hash resources, or 0 otherwise. Default is 1",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"arch",
        "description":"If applicable, the arch of the signed code",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"signed",
        "description":"1 If the file is signed else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"identifier",
        "description":"The signing identifier sealed into the signature",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cdhash",
        "description":"Hash of the application Code Directory",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"team_identifier",
        "description":"The team signing identifier sealed into the signature",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"authority",
        "description":"Certificate Common Name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"sip_config",
    "description":"Apple's System Integrity Protection (rootless) status.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/sip_config.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"config_flag",
        "description":"The System Integrity Protection config flag",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"enabled",
        "description":"1 if this configuration is enabled, otherwise 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"enabled_nvram",
        "description":"1 if this configuration is enabled, otherwise 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"smart_drive_info",
    "description":"Drive information read by SMART controller utilizing autodetect.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/smart/smart_drive_info.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"device_name",
        "description":"Name of block device",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disk_id",
        "description":"Physical slot number of device, only exists when hardware storage controller exists",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver_type",
        "description":"The explicit device type used to retrieve the SMART information",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model_family",
        "description":"Drive model family",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"device_model",
        "description":"Device Model",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"serial_number",
        "description":"Device serial number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"lu_wwn_device_id",
        "description":"Device Identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"additional_product_id",
        "description":"An additional drive identifier if any",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"firmware_version",
        "description":"Drive firmware version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user_capacity",
        "description":"Bytes of drive capacity",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sector_sizes",
        "description":"Bytes of drive sector sizes",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rotation_rate",
        "description":"Drive RPM",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"form_factor",
        "description":"Form factor if reported",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"in_smartctl_db",
        "description":"Boolean value for if drive is recognized",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ata_version",
        "description":"ATA version of drive",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"transport_type",
        "description":"Drive transport type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sata_version",
        "description":"SATA version, if any",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"read_device_identity_failure",
        "description":"Error string for device id read, if any",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"smart_supported",
        "description":"SMART support status",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"smart_enabled",
        "description":"SMART enabled status",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"packet_device_type",
        "description":"Packet device type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"power_mode",
        "description":"Device power mode",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"warnings",
        "description":"Warning messages from SMART controller",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"smbios_tables",
    "description":"BIOS (DMI) structure common details and content.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/smbios_tables.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"number",
        "description":"Table entry number",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Table entry type",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Table entry description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"handle",
        "description":"Table entry handle",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"header_size",
        "description":"Header size in bytes",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Table entry size in bytes",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"md5",
        "description":"MD5 hash of table entry",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"smc_keys",
    "description":"Apple's system management controller keys.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/smc_keys.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"key",
        "description":"4-character key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"SMC-reported type literal type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"size",
        "description":"Reported size of data in bytes",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"A type-encoded representation of the key value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hidden",
        "description":"1 if this key is normally hidden, otherwise 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"socket_events",
    "description":"Track network socket opens and closes.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/socket_events.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"action",
        "description":"The socket action (bind, listen, close)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path of executed file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fd",
        "description":"The file description for the process socket",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"auid",
        "description":"Audit User ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"success",
        "description":"The socket open attempt status",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"family",
        "description":"The Internet protocol family ID",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"protocol",
        "description":"The network protocol ID",
        "type":"integer",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"local_address",
        "description":"Local address associated with socket",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"remote_address",
        "description":"Remote address associated with socket",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"local_port",
        "description":"Local network protocol port number",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"remote_port",
        "description":"Remote network protocol port number",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"socket",
        "description":"The local path (UNIX domain socket only)",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of execution in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uptime",
        "description":"Time of execution in system uptime",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"ssh_configs",
    "description":"A table of parsed ssh_configs.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/ssh_configs.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"The local owner of the ssh_config file",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"block",
        "description":"The host or match block",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"option",
        "description":"The option and value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ssh_config_file",
        "description":"Path to the ssh_config file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"startup_items",
    "description":"Applications and binaries set as user/login startup items.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/macwin/startup_items.table",
    "platforms":[
      "darwin",
      "windows"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"Name of startup item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path of startup item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"args",
        "description":"Arguments provided to startup executable",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Startup Item or Login Item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source",
        "description":"Directory or plist containing startup item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"status",
        "description":"Startup status; either enabled or disabled",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"username",
        "description":"The user associated with the startup item",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"sudoers",
    "description":"Rules for running commands as other users via sudo.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/sudoers.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"source",
        "description":"Source file containing the given rule",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"header",
        "description":"Symbol for given rule",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rule_details",
        "description":"Rule definition",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"suid_bin",
    "description":"suid binaries in common locations.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/suid_bin.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"path",
        "description":"Binary path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"username",
        "description":"Binary owner username",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"groupname",
        "description":"Binary owner group",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"permissions",
        "description":"Binary permissions",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"syslog_events",
    "description":"",
    "url":"https://github.com/osquery/osquery/blob/master/specs/linux/syslog_events.table",
    "platforms":[
      "linux"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"time",
        "description":"Current unix epoch time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"datetime",
        "description":"Time known to syslog",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"host",
        "description":"Hostname configured for syslog",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"severity",
        "description":"Syslog severity",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"facility",
        "description":"Syslog facility",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"tag",
        "description":"The syslog tag",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"message",
        "description":"The syslog message",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"system_controls",
    "description":"sysctl names, values, and settings information.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/system_controls.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Full sysctl MIB name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"oid",
        "description":"Control MIB",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subsystem",
        "description":"Subsystem ID, control type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"current_value",
        "description":"Value of setting",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"config_value",
        "description":"The MIB value set in /etc/sysctl.conf",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Data type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"field_name",
        "description":"Specific attribute of opaque type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"system_info",
    "description":"System information for identification.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/system_info.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"hostname",
        "description":"Network hostname including domain",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uuid",
        "description":"Unique ID provided by the system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_type",
        "description":"CPU type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_subtype",
        "description":"CPU subtype",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_brand",
        "description":"CPU brand string, contains vendor and model",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_physical_cores",
        "description":"Number of physical CPU cores in to the system",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_logical_cores",
        "description":"Number of logical CPU cores available to the system",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"cpu_microcode",
        "description":"Microcode version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"physical_memory",
        "description":"Total physical memory in bytes",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hardware_vendor",
        "description":"Hardware vendor",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hardware_model",
        "description":"Hardware model",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hardware_version",
        "description":"Hardware version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hardware_serial",
        "description":"Device serial number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"board_vendor",
        "description":"Board vendor",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"board_model",
        "description":"Board model",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"board_version",
        "description":"Board version",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"board_serial",
        "description":"Board serial number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"computer_name",
        "description":"Friendly computer name (optional)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"local_hostname",
        "description":"Local hostname (optional)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"temperature_sensors",
    "description":"Machine's temperature sensors.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/temperature_sensors.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"key",
        "description":"The SMC key on OS X",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Name of temperature source",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"celsius",
        "description":"Temperature in Celsius",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"fahrenheit",
        "description":"Temperature in Fahrenheit",
        "type":"double",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"time",
    "description":"Track current date and time in the system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/utility/time.table",
    "platforms":[
      "darwin",
      "linux",
      "freebsd",
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"weekday",
        "description":"Current weekday in the system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"year",
        "description":"Current year in the system",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"month",
        "description":"Current month in the system",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"day",
        "description":"Current day in the system",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hour",
        "description":"Current hour in the system",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"minutes",
        "description":"Current minutes in the system",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"seconds",
        "description":"Current seconds in the system",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"timezone",
        "description":"Current timezone in the system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"local_time",
        "description":"Current local UNIX time in the system",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"local_timezone",
        "description":"Current local timezone in the system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"unix_time",
        "description":"Current UNIX time in the system, converted to UTC if --utc enabled",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"timestamp",
        "description":"Current timestamp (log format) in the system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"datetime",
        "description":"Current date and time (ISO format) in the system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"iso_8601",
        "description":"Current time (ISO format) in the system",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"win_timestamp",
        "description":"Timestamp value in 100 nanosecond units.",
        "type":"bigint",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"time_machine_backups",
    "description":"Backups to drives using TimeMachine.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/time_machine_backups.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"destination_id",
        "description":"Time Machine destination ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"backup_date",
        "description":"Backup Date",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"time_machine_destinations",
    "description":"Locations backed up to using Time Machine.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/time_machine_destinations.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"alias",
        "description":"Human readable name of drive",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"destination_id",
        "description":"Time Machine destination ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"consistency_scan_date",
        "description":"Consistency scan date",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"root_volume_uuid",
        "description":"Root UUID of backup volume",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bytes_available",
        "description":"Bytes available on volume",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bytes_used",
        "description":"Bytes used on volume",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"encryption",
        "description":"Last known encrypted state",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"ulimit_info",
    "description":"System resource usage limits.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/ulimit_info.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"type",
        "description":"System resource to be limited",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"soft_limit",
        "description":"Current limit value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hard_limit",
        "description":"Maximum limit value",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"uptime",
    "description":"Track time passed since last boot.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/uptime.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"days",
        "description":"Days of uptime",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"hours",
        "description":"Hours of uptime",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"minutes",
        "description":"Minutes of uptime",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"seconds",
        "description":"Seconds of uptime",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"total_seconds",
        "description":"Total uptime seconds",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"usb_devices",
    "description":"USB devices that are actively plugged into the host system.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/usb_devices.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"usb_address",
        "description":"USB Device used address",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"usb_port",
        "description":"USB Device used port",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vendor",
        "description":"USB Device vendor string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"vendor_id",
        "description":"Hex encoded USB Device vendor identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"USB Device version number",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model",
        "description":"USB Device model string",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model_id",
        "description":"Hex encoded USB Device model identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"serial",
        "description":"USB Device serial connection",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"class",
        "description":"USB Device class",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"subclass",
        "description":"USB Device subclass",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"protocol",
        "description":"USB Device protocol",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"removable",
        "description":"1 If USB device is removable else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"user_events",
    "description":"Track user events from the audit framework.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/user_events.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"User ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"auid",
        "description":"Audit User ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process (or thread) ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"message",
        "description":"Message from the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"The file description for the process socket",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Supplied path from event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"address",
        "description":"The Internet protocol address or family ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"terminal",
        "description":"The network protocol ID",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of execution in UNIX time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uptime",
        "description":"Time of execution in system uptime",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"user_groups",
    "description":"Local system user group relationships.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/user_groups.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"User ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"Group ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"user_interaction_events",
    "description":"Track user interaction events from macOS' event tapping framework.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/user_interaction_events.table",
    "platforms":[
      "darwin"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"time",
        "description":"Time",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"user_ssh_keys",
    "description":"Returns the private keys in the users ~/.ssh directory and whether or not they are encrypted.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/user_ssh_keys.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"The local user that owns the key file",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path to key file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"encrypted",
        "description":"1 if key is encrypted, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"userassist",
    "description":"UserAssist Registry Key tracks when a user executes an application from Windows Explorer.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/userassist.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"Application file path.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_execution_time",
        "description":"Most recent time application was executed.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"count",
        "description":"Number of times the application has been executed.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sid",
        "description":"User SID.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"users",
    "description":"Local user accounts (including domain accounts that have logged on locally (Windows)).",
    "url":"https://github.com/osquery/osquery/blob/master/specs/users.table",
    "platforms":[
      "darwin",
      "linux",
      "windows",
      "freebsd"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"uid",
        "description":"User ID",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid",
        "description":"Group ID (unsigned)",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uid_signed",
        "description":"User ID as int64 signed (Apple)",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gid_signed",
        "description":"Default group ID as int64 signed (Apple)",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"username",
        "description":"Username",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"description",
        "description":"Optional user description",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"directory",
        "description":"User's home directory",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"shell",
        "description":"User's configured default shell",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uuid",
        "description":"User's UUID (Apple) or SID (Windows)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Whether the account is roaming (domain), local, or a system profile",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"is_hidden",
        "description":"IsHidden attribute set in OpenDirectory",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"video_info",
    "description":"Retrieve video card information of the machine.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/video_info.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"color_depth",
        "description":"The amount of bits per pixel to represent color.",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver",
        "description":"The driver of the device.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver_date",
        "description":"The date listed on the installed driver.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"driver_version",
        "description":"The version of the installed driver.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"manufacturer",
        "description":"The manufaturer of the gpu.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"model",
        "description":"The model of the gpu.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"series",
        "description":"The series of the gpu.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"video_mode",
        "description":"The current resolution of the display.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"virtual_memory_info",
    "description":"Darwin Virtual Memory statistics.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/virtual_memory_info.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"free",
        "description":"Total number of free pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"active",
        "description":"Total number of active pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"inactive",
        "description":"Total number of inactive pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"speculative",
        "description":"Total number of speculative pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"throttled",
        "description":"Total number of throttled pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"wired",
        "description":"Total number of wired down pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"purgeable",
        "description":"Total number of purgeable pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"faults",
        "description":"Total number of calls to vm_faults.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"copy",
        "description":"Total number of copy-on-write pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"zero_fill",
        "description":"Total number of zero filled pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"reactivated",
        "description":"Total number of reactivated pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"purged",
        "description":"Total number of purged pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"file_backed",
        "description":"Total number of file backed pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"anonymous",
        "description":"Total number of anonymous pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uncompressed",
        "description":"Total number of uncompressed pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"compressor",
        "description":"The number of pages used to store compressed VM pages.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"decompressed",
        "description":"The total number of pages that have been decompressed by the VM compressor.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"compressed",
        "description":"The total number of pages that have been compressed by the VM compressor.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"page_ins",
        "description":"The total number of requests for pages from a pager.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"page_outs",
        "description":"Total number of pages paged out.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"swap_ins",
        "description":"The total number of compressed pages that have been swapped out to disk.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"swap_outs",
        "description":"The total number of compressed pages that have been swapped back in from disk.",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"wifi_networks",
    "description":"OS X known/remembered Wi-Fi networks list.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/wifi_networks.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"ssid",
        "description":"SSID octets of the network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"network_name",
        "description":"Name of the network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"security_type",
        "description":"Type of security on this network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"last_connected",
        "description":"Last time this netword was connected to as a unix_time",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"passpoint",
        "description":"1 if Passpoint is supported, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"possibly_hidden",
        "description":"1 if network is possibly a hidden network, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"roaming",
        "description":"1 if roaming is supported, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"roaming_profile",
        "description":"Describe the roaming profile, usually one of Single, Dual  or Multi",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"captive_portal",
        "description":"1 if this network has a captive portal, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"auto_login",
        "description":"1 if auto login is enabled, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"temporarily_disabled",
        "description":"1 if this network is temporarily disabled, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"disabled",
        "description":"1 if this network is disabled, 0 otherwise",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"wifi_status",
    "description":"OS X current WiFi status.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/wifi_status.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"interface",
        "description":"Name of the interface",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ssid",
        "description":"SSID octets of the network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bssid",
        "description":"The current basic service set identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"network_name",
        "description":"Name of the network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"country_code",
        "description":"The country code (ISO/IEC 3166-1:1997) for the network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"security_type",
        "description":"Type of security on this network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rssi",
        "description":"The current received signal strength indication (dbm)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"noise",
        "description":"The current noise measurement (dBm)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"channel",
        "description":"Channel number",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"channel_width",
        "description":"Channel width",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"channel_band",
        "description":"Channel band",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"transmit_rate",
        "description":"The current transmit rate",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"mode",
        "description":"The current operating mode for the Wi-Fi interface",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"wifi_survey",
    "description":"Scan for nearby WiFi networks.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/wifi_scan.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"interface",
        "description":"Name of the interface",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"ssid",
        "description":"SSID octets of the network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"bssid",
        "description":"The current basic service set identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"network_name",
        "description":"Name of the network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"country_code",
        "description":"The country code (ISO/IEC 3166-1:1997) for the network",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"rssi",
        "description":"The current received signal strength indication (dbm)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"noise",
        "description":"The current noise measurement (dBm)",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"channel",
        "description":"Channel number",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"channel_width",
        "description":"Channel width",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"channel_band",
        "description":"Channel band",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"winbaseobj",
    "description":"Lists named Windows objects in the default object directories, across all terminal services sessions.  Example Windows ojbect types include Mutexes, Events, Jobs and Semaphors.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/winbaseobj.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"session_id",
        "description":"Terminal Services Session Id",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"object_name",
        "description":"Object Name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"object_type",
        "description":"Object Type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"windows_crashes",
    "description":"Extracted information from Windows crash logs (Minidumps).",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/windows_crashes.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"datetime",
        "description":"Timestamp (log format) of the crash",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"module",
        "description":"Path of the crashed module within the process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"path",
        "description":"Path of the executable file for the crashed process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process ID of the crashed process",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"tid",
        "description":"Thread ID of the crashed thread",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"version",
        "description":"File version info of the crashed process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"process_uptime",
        "description":"Uptime of the process in seconds",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"stack_trace",
        "description":"Multiple stack frames from the stack trace",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"exception_code",
        "description":"The Windows exception code",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"exception_message",
        "description":"The NTSTATUS error message associated with the exception code",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"exception_address",
        "description":"Address (in hex) where the exception occurred",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"registers",
        "description":"The values of the system registers",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"command_line",
        "description":"Command-line string passed to the crashed process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"current_directory",
        "description":"Current working directory of the crashed process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"username",
        "description":"Username of the user who ran the crashed process",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"machine_name",
        "description":"Name of the machine where the crash happened",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"major_version",
        "description":"Windows major version of the machine",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"minor_version",
        "description":"Windows minor version of the machine",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"build_number",
        "description":"Windows build number of the crashing machine",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Type of crash log",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"crash_path",
        "description":"Path of the log file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"windows_eventlog",
    "description":"Table for querying all recorded Windows event logs.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/windows_eventlog.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"channel",
        "description":"Source or channel of the event",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"datetime",
        "description":"System time at which the event occurred",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"task",
        "description":"Task value associated with the event",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"level",
        "description":"Severity level associated with the event",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"provider_name",
        "description":"Provider name of the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"provider_guid",
        "description":"Provider guid of the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eventid",
        "description":"Event ID of the event",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"keywords",
        "description":"A bitmask of the keywords defined in the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"data",
        "description":"Data associated with the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"pid",
        "description":"Process ID which emitted the event record",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"tid",
        "description":"Thread ID which emitted the event record",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time_range",
        "description":"System time to selectively filter the events",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"timestamp",
        "description":"Timestamp to selectively filter the events",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"xpath",
        "description":"The custom query to filter events",
        "type":"text",
        "hidden":true,
        "required":true,
        "index":false
      }
    ]
  },
  {
    "name":"windows_events",
    "description":"Windows Event logs.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/windows_events.table",
    "platforms":[
      "windows"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"time",
        "description":"Timestamp the event was received",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"datetime",
        "description":"System time at which the event occurred",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"source",
        "description":"Source or channel of the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"provider_name",
        "description":"Provider name of the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"provider_guid",
        "description":"Provider guid of the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eventid",
        "description":"Event ID of the event",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"task",
        "description":"Task value associated with the event",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"level",
        "description":"The severity level associated with the event",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"keywords",
        "description":"A bitmask of the keywords defined in the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"data",
        "description":"Data associated with the event",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"windows_optional_features",
    "description":"Lists names and installation states of windows features. Maps to Win32_OptionalFeature WMI class.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/windows_optional_features.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Name of the feature",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"caption",
        "description":"Caption of feature in settings UI",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"Installation state value. 1 == Enabled, 2 == Disabled, 3 == Absent",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"statename",
        "description":"Installation state name. 'Enabled','Disabled','Absent'",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"windows_security_center",
    "description":"The health status of Window Security features. Health values can be \"Good\", \"Poor\". \"Snoozed\", \"Not Monitored\", and \"Error\".",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/windows_security_center.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"firewall",
        "description":"The health of the monitored Firewall (see windows_security_products)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"autoupdate",
        "description":"The health of the Windows Autoupdate feature",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"antivirus",
        "description":"The health of the monitored Antivirus solution (see windows_security_products)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"antispyware",
        "description":"The health of the monitored Antispyware solution (see windows_security_products)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"internet_settings",
        "description":"The health of the Internet Settings",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"windows_security_center_service",
        "description":"The health of the Windows Security Center Service",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user_account_control",
        "description":"The health of the User Account Control (UAC) capability in Windows",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"windows_security_products",
    "description":"Enumeration of registered Windows security products.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/windows_security_products.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"type",
        "description":"Type of security product",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"name",
        "description":"Name of product",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state",
        "description":"State of protection",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"state_timestamp",
        "description":"Timestamp for the product state",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"remediation_path",
        "description":"Remediation path",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"signatures_up_to_date",
        "description":"1 if product signatures are up to date, else 0",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"wmi_bios_info",
    "description":"Lists important information from the system bios.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/wmi_bios_info.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Name of the Bios setting",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"value",
        "description":"Value of the Bios setting",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"wmi_cli_event_consumers",
    "description":"WMI CommandLineEventConsumer, which can be used for persistence on Windows. See https://www.blackhat.com/docs/us-15/materials/us-15-Graeber-Abusing-Windows-Management-Instrumentation-WMI-To-Build-A-Persistent%20Asynchronous-And-Fileless-Backdoor-wp.pdf for more details.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/wmi_cli_event_consumers.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Unique name of a consumer.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"command_line_template",
        "description":"Standard string template that specifies the process to be started. This property can be NULL, and the ExecutablePath property is used as the command line.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"executable_path",
        "description":"Module to execute. The string can specify the full path and file name of the module to execute, or it can specify a partial name. If a partial name is specified, the current drive and current directory are assumed.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"class",
        "description":"The name of the class.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"relative_path",
        "description":"Relative path to the class or instance.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"wmi_event_filters",
    "description":"Lists WMI event filters.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/wmi_event_filters.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Unique identifier of an event filter.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"query",
        "description":"Windows Management Instrumentation Query Language (WQL) event query that specifies the set of events for consumer notification, and the specific conditions for notification.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"query_language",
        "description":"Query language that the query is written in.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"class",
        "description":"The name of the class.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"relative_path",
        "description":"Relative path to the class or instance.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"wmi_filter_consumer_binding",
    "description":"Lists the relationship between event consumers and filters.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/wmi_filter_consumer_binding.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"consumer",
        "description":"Reference to an instance of __EventConsumer that represents the object path to a logical consumer, the recipient of an event.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"filter",
        "description":"Reference to an instance of __EventFilter that represents the object path to an event filter which is a query that specifies the type of event to be received.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"class",
        "description":"The name of the class.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"relative_path",
        "description":"Relative path to the class or instance.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"wmi_script_event_consumers",
    "description":"WMI ActiveScriptEventConsumer, which can be used for persistence on Windows. See https://www.blackhat.com/docs/us-15/materials/us-15-Graeber-Abusing-Windows-Management-Instrumentation-WMI-To-Build-A-Persistent%20Asynchronous-And-Fileless-Backdoor-wp.pdf for more details.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/windows/wmi_script_event_consumers.table",
    "platforms":[
      "windows"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Unique identifier for the event consumer. ",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"scripting_engine",
        "description":"Name of the scripting engine to use, for example, 'VBScript'. This property cannot be NULL.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"script_file_name",
        "description":"Name of the file from which the script text is read, intended as an alternative to specifying the text of the script in the ScriptText property.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"script_text",
        "description":"Text of the script that is expressed in a language known to the scripting engine. This property must be NULL if the ScriptFileName property is not NULL.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"class",
        "description":"The name of the class.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"relative_path",
        "description":"Relative path to the class or instance.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"xprotect_entries",
    "description":"Database of the machine's XProtect signatures.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/xprotect_entries.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"name",
        "description":"Description of XProtected malware",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"launch_type",
        "description":"Launch services content type",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"identity",
        "description":"XProtect identity (SHA1) of content",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"filename",
        "description":"Use this file name to match",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"filetype",
        "description":"Use this file type to match",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"optional",
        "description":"Match any of the identities/patterns for this XProtect name",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"uses_pattern",
        "description":"Uses a match pattern instead of identity",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"xprotect_meta",
    "description":"Database of the machine's XProtect browser-related signatures.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/xprotect_meta.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":true,
    "columns":[
      {
        "name":"identifier",
        "description":"Browser plugin or extension identifier",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"type",
        "description":"Either plugin or extension",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"developer_id",
        "description":"Developer identity (SHA1) of extension",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"min_version",
        "description":"The minimum allowed plugin version.",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"xprotect_reports",
    "description":"Database of XProtect matches (if user generated/sent an XProtect report).",
    "url":"https://github.com/osquery/osquery/blob/master/specs/darwin/xprotect_reports.table",
    "platforms":[
      "darwin"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Description of XProtected malware",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"user_action",
        "description":"Action taken by user after prompted",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Quarantine alert time",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"yara",
    "description":"Track YARA matches for files or PIDs.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/yara/yara.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"path",
        "description":"The path scanned",
        "type":"text",
        "hidden":false,
        "required":true,
        "index":false
      },
      {
        "name":"matches",
        "description":"List of YARA matches",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"count",
        "description":"Number of YARA matches",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sig_group",
        "description":"Signature group used",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sigfile",
        "description":"Signature file used",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sigrule",
        "description":"Signature strings used",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      },
      {
        "name":"strings",
        "description":"Matching strings",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"tags",
        "description":"Matching tags",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"sigurl",
        "description":"Signature url",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"yara_events",
    "description":"Track YARA matches for files specified in configuration data.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/yara/yara_events.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":true,
    "cacheable":false,
    "columns":[
      {
        "name":"target_path",
        "description":"The path scanned",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"category",
        "description":"The category of the file",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"action",
        "description":"Change action (UPDATE, REMOVE, etc)",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"transaction_id",
        "description":"ID used during bulk update",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"matches",
        "description":"List of YARA matches",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"count",
        "description":"Number of YARA matches",
        "type":"integer",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"strings",
        "description":"Matching strings",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"tags",
        "description":"Matching tags",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"time",
        "description":"Time of the scan",
        "type":"bigint",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"eid",
        "description":"Event ID",
        "type":"text",
        "hidden":true,
        "required":false,
        "index":false
      }
    ]
  },
  {
    "name":"yum_sources",
    "description":"Current list of Yum repositories or software channels.",
    "url":"https://github.com/osquery/osquery/blob/master/specs/posix/yum_sources.table",
    "platforms":[
      "darwin",
      "linux"
    ],
    "evented":false,
    "cacheable":false,
    "columns":[
      {
        "name":"name",
        "description":"Repository name",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"baseurl",
        "description":"Repository base URL",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"enabled",
        "description":"Whether the repository is used",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gpgcheck",
        "description":"Whether packages are GPG checked",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      },
      {
        "name":"gpgkey",
        "description":"URL to GPG key",
        "type":"text",
        "hidden":false,
        "required":false,
        "index":false
      }
    ]
  }
];