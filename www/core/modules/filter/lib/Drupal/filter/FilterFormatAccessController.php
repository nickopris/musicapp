<?php

/**
 * @file
 * Contains \Drupal\filter\FilterFormatAccessController.
 */

namespace Drupal\filter;

use Drupal\Core\Entity\EntityAccessController;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Defines the access controller for the filter format entity type.
 */
class FilterFormatAccessController extends EntityAccessController {

  /**
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, $langcode, AccountInterface $account) {
    // Handle special cases up front. All users have access to the fallback
    // format.
    if ($entity->isFallbackFormat()) {
      return TRUE;
    }

    if ($operation != 'view' && $account->hasPermission('administer filters')) {
      return TRUE;
    }

    // Check the permission if one exists; otherwise, we have a non-existent
    // format so we return FALSE.
    $permission = $entity->getPermissionName();
    return !empty($permission) && $account->hasPermission($permission);
  }

  /**
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    return $account->hasPermission('administer filters');
  }

}
